import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, timer } from 'rxjs';
import { ConfirmDialogService } from 'src/app/shared/styles/components/confirm-dialog/confirm-dialog.service';
import { scholarship } from '../../model/news.model';
import { newsService } from '../../services/news.service';

@Component({
  selector: 'app-news-scho',
  templateUrl: './news-scho.component.html',
  styleUrls: ['./news-scho.component.less']
})
export class NewsSchoComponent implements OnInit, OnDestroy {
  @ViewChild('competencFrameList', { static: true })
  competencFrameList!: ElementRef<HTMLElement>;

  public list: scholarship[] = [];
  isDetailShown = false;
  selectedCompetenceFrame = '';

  filterList: string[] = [];
  searchKeywords: string[] = [];

  currentPage = 0;
  listLength = 0;
  order = 0;

  paginationAmounts = [27, 18, 9];
  paginationAmount = 9;

  subscriptions = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private sevices: newsService,
    private dialogService: ConfirmDialogService
  ) {
    this.getPageList(this.currentPage);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.getSearchKeyword();
  }

  selectCompetenceFrame(value: string, obj: scholarship, cardRef: HTMLElement) {
    this.subscriptions.add(
      timer(50).subscribe(() => {
        cardRef.scrollIntoView({
          behavior: 'smooth',
        });
      })
    );

    this.sevices.scholarship = obj;
    this.selectedCompetenceFrame = value;

    this.router.navigate(['./competence-frames/' + value]);
  }

  search(event: Event) {
    if (event['target']) {
      const element = event['target'] as HTMLInputElement;
      const searchText = element.value;
      element.value = '';
      this.addFilter(searchText);
    }
  }

  getSearchKeyword() {
    const keywords = localStorage.getItem('searchKeyword');
    localStorage.setItem('searchKeyword', '[]');
    if (keywords) {
      this.searchKeywords = JSON.parse(keywords);
    }
  }

  saveSearchKeyword(keyword: string) {
    if (
      !this.searchKeywords.some((x) => x.toLowerCase() == keyword.toLowerCase())
    ) {
      if (this.searchKeywords.length >= 5) {
        this.searchKeywords.pop();
      }

      this.searchKeywords.unshift(keyword);
      localStorage.setItem(
        'searchKeyword',
        JSON.stringify(this.searchKeywords)
      );
    }
  }

  addFilter(filterText: string) {
    if (
      !this.filterList.some(
        (x) => x.toLowerCase() == filterText.toLowerCase()
      ) &&
      filterText.length > 0
    ) {
      this.filterList.push(filterText);
      this.saveSearchKeyword(filterText);
      this.getPageList(0, true, filterText);
    }
  }

  deleteFilter(filterText: string) {
    this.filterList = this.filterList.filter((filter) => filter != filterText);
    this.getPageList(0, true);
  }

  deleteAllFilter() {
    this.filterList = [];
    this.getPageList(0, true);
  }

  deleteCompetenceFrame(id: string, event: Event) {
    event.stopPropagation();
    const obtainedName = this.sevices.listScholarship.find(
      (com) => com.id === id
    )?.scholarship;
    const dialogRef = this.dialogService.open({
      content: 'Bạn có chắc chắn muốn xóa khung năng lực ' + obtainedName,
      title: 'Xóa khung năng lực',
      type: 'warning',
      mode: 'duo',
      confirmText: 'Xoá',
      cancelText: 'Hủy',
    });

    dialogRef.afterClosed().subscribe((isConfirm: boolean) => {
      if (isConfirm) {
        this.sevices.deleteById(id);
        this.message.success('Xoá thành công khung năng lực');
        this.router.navigate(['./competence-frames']);
        this.isDetailShown = false;
        this.getPageList(this.currentPage);
      }
    });
  }

  createCompetenceFrame() {
    // this.sevices.idTemp = '';
    this.sevices.conditionDup = false;
    this.router
      .navigate(['./competence-frames'], { skipLocationChange: true })
      .then(() => {
        this.router.navigate(['./competence-frames/create']);
      });

    this.isDetailShown = true;
    this.selectedCompetenceFrame = '';
  }

  getListComLength() {
    return this.listLength;
  }

  getPageList(page?: number, scrollToTop?: boolean, str?: string) {
    this.currentPage = page == undefined ? this.currentPage : page;

    if (this.filterList) {
      let tempList: scholarship[] = [];
      this.sevices.listScholarship.forEach((comFrame: scholarship) => {
        if (
          this.filterList.every((filterKeyword: string) => {
            const lowerFilterKeyword = filterKeyword.toLowerCase();
            if (comFrame.descriptions === undefined) {
              return (
                // if(this.sevices.checkVietnames())
                this.sevices
                  .toLowerCaseNonAccentVietnamese(comFrame.scholarship)
                  .includes(lowerFilterKeyword) 
                //   ||
                // comFrame.competence.some((competence: string) =>
                //   this.sevices
                //     .toLowerCaseNonAccentVietnamese(competence)
                //     .includes(lowerFilterKeyword)
                // )
              );
            } else {
              return (
                // if(this.sevices.checkVietnames())
                this.sevices
                  .toLowerCaseNonAccentVietnamese(
                    comFrame.scholarship,
                    lowerFilterKeyword
                  )
                  .includes(lowerFilterKeyword) ||
                this.sevices
                  .toLowerCaseNonAccentVietnamese(
                    comFrame.descriptions,
                    lowerFilterKeyword
                  )
                  .includes(lowerFilterKeyword) 
                //   ||
                // comFrame.competence.some((competence: string) =>
                //   this.sevices
                //     .toLowerCaseNonAccentVietnamese(
                //       competence,
                //       lowerFilterKeyword
                //     )
                //     .includes(lowerFilterKeyword)
                // )
              );
            }
          })
        ) {
          tempList.push(comFrame);
        }
      });
      this.listLength = tempList.length;

      if (this.order == 1) {
        tempList = tempList.sort((n1, n2) => {
          if (n1.scholarship > n2.scholarship) return 1;
          if (n1.scholarship < n2.scholarship) return -1;
          return 0;
        });
      } else if (this.order == -1) {
        tempList = tempList.sort((n1, n2) => {
          if (n1.scholarship < n2.scholarship) return 1;
          if (n1.scholarship > n2.scholarship) return -1;
          return 0;
        });
      }

      this.list = tempList.slice(
        this.currentPage * this.paginationAmount,
        (this.currentPage + 1) * this.paginationAmount
      );
    } else {
      this.listLength = this.sevices.listScholarship.length;
      this.list = this.sevices.listScholarship.slice(
        this.currentPage * this.paginationAmount,
        (this.currentPage + 1) * this.paginationAmount
      );
    }

    if (this.list.length == 0 && this.currentPage != 0) {
      this.getPageList(this.currentPage - 1);
    }

    if (scrollToTop) {
      this.subscriptions.add(
        timer(50).subscribe(() => {
          this.competencFrameList.nativeElement.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        })
      );
    }
  }

  setOrder(order: number) {
    this.order = order;
    this.getPageList(0, true);
  }

  setPaginationAmount(amount: number) {
    this.paginationAmount = amount;
    this.getPageList(0, true);
  }

  cancelDetailShow() {
    this.isDetailShown = false;
    this.selectedCompetenceFrame = '';
  }

  onActivate() {
    this.isDetailShown = true;
  }
  onDeactivate() {
    this.isDetailShown = false;
  }
}
