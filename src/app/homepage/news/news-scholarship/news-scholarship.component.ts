import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, of } from 'rxjs';
import { listOfFilters } from 'src/app/config';
import { TreeSelect } from 'src/app/shared/styles/components/dropdown-tree-select/treeSelect';
import { scholarship } from '../../model/news.model';
import { newsService } from '../../services/news.service';

@Component({
  selector: 'app-news-scholarship',
  templateUrl: './news-scholarship.component.html',
  styleUrls: ['./news-scholarship.component.less'],
})
export class NewsScholarshipComponent implements OnInit {
  filterList: string[] = [];
  scholarship = 'Loại học bổng';
  level = 'Trình độ';
  majors = 'Ngành học';
  location = 'Địa điểm';
  dataScholarship: string[] = [];
  dataLevel: string[] = [];
  dataMajors: string[] = [];
  dataLocation: string[] = [];
  listScholarship: scholarship[] = [];
  rawListScholarship$ = this.sevices.getListScholarship();
  rawListScholarship1$ = this.rawListScholarship$;
  pageIndex$ = new BehaviorSubject<number>(1);
  pageSize$ = new BehaviorSubject<number>(5);
  // public filters$ = new BehaviorSubject<TreeSelect[]>(listOfFilters);
  // public searches$ = new BehaviorSubject<string[]>([]);
  listScholarship$ = combineLatest({
    list: this.rawListScholarship$,
    index: this.pageIndex$,
    size: this.pageSize$,
  }).pipe(
    map(({ list, index, size }) => {
      return list.slice((index - 1) * size, index * size);
    })
  );
  constructor(private router: Router, private sevices: newsService) {}

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.dataScholarship.push('Toàn phần');
    this.dataScholarship.push('Bán phần');
    this.dataScholarship.push('khác');
    this.dataScholarship.push('Tất cả');
    this.dataLevel.push('Cử nhân');
    this.dataLevel.push('Kỹ sư');
    this.dataLevel.push('Kiến trúc sư');
    this.dataLevel.push('Thạc sĩ');
    this.dataLevel.push('Tiến sĩ');
    this.dataMajors.push('Kinh tế');
    this.dataMajors.push('Công nghệ thông tin');
    this.dataMajors.push('Kiến trúc');
    this.dataMajors.push('Logictist');
    this.dataMajors.push('Mỹ thuật');
    this.dataLocation.push('Đức');
    this.dataLocation.push('Nga');
    this.dataLocation.push('Anh');
    this.dataLocation.push('Úc');
    this.dataLocation.push('Mỹ');
  }
  onPageIndexChange(index: number) {
    console.log(index);
    this.pageIndex$.next(index);
  }
  onSelectionChangeScholarship(event: string) {
    this.scholarship = event;
  }
  onSelectionChangeLevel(event: string) {
    this.level = event;
  }
  onSelectionChangeMajors(event: string) {
    this.majors = event;
  }
  onSelectionChangeLocation(event: string) {
    this.location = event;
  }
  addFilter(filterText: string) {
    if (
      !this.filterList.some(
        (x) => x.toLowerCase() == filterText.toLowerCase()
      ) &&
      filterText.length > 0
    ) {
      this.filterList.push(filterText);
      // this.getPageList(0, true, filterText);
    }
  }
  search(event: Event) {
    if (event.target) {
      const element = event.target as HTMLInputElement;
      const searchText = element.value;
      // this.filter(searchText);
      console.log(searchText);

      // this.addFilter(searchText);
    }
  }
  // private isSearchTalent(scholarship: scholarship, searchList: string[]): boolean {
  //   /*
  //     searchFilter by all column in searchFilterKeys
  //     talent is selected when meet all searchString in searchList
  //     searchFilterKeys is declared in talentService
  //   */
  //   if (searchList.length === 0) return true;

  //   return searchList.every((searchString) => {
  //     if (searchString[0] === '#') {
  //       return scholarship.tags.some(
  //         (tag) =>
  //           tag.toLocaleLowerCase() == searchString.slice(1).toLocaleLowerCase()
  //       );
  //     }
  //     return searchFilterKeys.some((searchFilterKey) =>
  //     scholarship[searchFilterKey]
  //         ?.toLocaleLowerCase()
  //         .includes(searchString.toLocaleLowerCase())
  //     );
  //   });
  // }
  // private isSelectedTalent(scholarship: scholarship, filters: TreeSelect[]): boolean {
  //   /*
  //     check condition of talent if can select a talent
  //     just filter by one column
  //     listOfFilter {
  //       keys: {text:string, value: boolean}[]
  //     }
  //   */
  //   return filters.reduce(
  //     (prev, filterItem) =>
  //       prev &&
  //       (filterItem.value.filter((item) => item.value).length === 0 ||
  //         filterItem.value
  //           .filter((item) => item.value)
  //           .map((item) => item.text)
  //           .some((item) =>
  //           scholarship[filterItem.key as FilterKey]?.includes(item)
  //           )),
  //     true
  //   );
  // }
  // filter(searchText: string) {
  //   // console.log(this.todo1);
  //   if (searchText.length === 0) this.rawListScholarship$ = this.rawListScholarship1$;
  //   if (this.sevices.checkVietnames(searchText)) {
  //     this.rawListScholarship$ = this.rawListScholarship1$.filter(
  //       (item) =>
  //         //if vietnam accent
  //         //checkVietnam (searchText) true

  //         item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  //       //else
  //       //convertVietnames(item.title).include()
  //     );
  //   } else {
  //     this.rawListScholarship$ = this.rawListScholarship1$.filter(
  //       (item) =>
  //         //if vietnam accent
  //         //checkVietnam (searchText) true

  //         this.sevices
  //           .toLowerCaseNonAccentVietnamese(item)
  //           .includes(searchText.toLocaleLowerCase())
  //       //else
  //       //convertVietnames(item.title).include()
  //     );
  //   }

  //   console.log(this.rawListScholarship$);
  // }
}
