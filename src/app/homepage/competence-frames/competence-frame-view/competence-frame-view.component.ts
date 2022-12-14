import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { mergeMap, tap } from 'rxjs';
import { Recruit } from '../../model/news.model';
import { CompetenceFramesEntryComponent } from '../competence-frames-entry/competence-frames-entry.component';
import { CompetenceFramesService } from '../services/competence-frames.service';
import { htmlToText } from 'html-to-text';

@Component({
  selector: 'app-competence-frame-view',
  templateUrl: './competence-frame-view.component.html',
  styleUrls: ['./competence-frame-view.component.less'],
})
export class CompetenceFrameViewComponent implements OnInit {
  img =
    'https://firebasestorage.googleapis.com/v0/b/newscv-3595e.appspot.com/o/cf76fb34-a0ec-45f2-9dcd-2e333754b0d1png?alt=media';
  public comFrame: Recruit | undefined = new Recruit();
  public id = '';
  des = '';
  comName = '';
  public comFrameInfo$ = this.route.params.pipe(
    mergeMap((p) => {
      if (!this.service.isComFrameExist(p['comFrameId'])) {
        this.cancel();
      }
      this.id = p['comFrameId'];
      return this.service.getRecruitInfo(p['comFrameId']);
    }),
    tap((it) => (this.comFrame = it))
  );

  constructor(
    private message: NzMessageService,
    private route: ActivatedRoute,
    private service: CompetenceFramesService,
    private router: Router,
    private competenceFrameCom: CompetenceFramesEntryComponent,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.comName = this.service.nameCompany;
    this.comFrame = this.service.recruit;
    const result = htmlToText(this.comFrame.description, {
      singleNewLineParagraphs: true,
      ignoreImage: true,
      formatters: {
        anchor: (el, walk, builder, opts) => {
          builder.openBlock();
          walk(el.children, builder);
          builder.closeBlock();
        },
      },
    });
    // const appDiv: HTMLElement = document.getElementById('app') as HTMLElement;
    // appDiv.innerHTML = result;
    this.des = result;
    console.log(this.des);
  }

  public create() {
    this.service.conditionDup = false;
    this.router.navigate(['./competence-frames/create']);
  }
  public update() {
    this.router.navigate(['./competence-frames/' + this.id + '/edit']);
  }
  public cancel() {
    this.router.navigate(['./competence-frames/']);
    this.competenceFrameCom.cancelDetailShow();
  }
  public delete() {
    this.modal.warning({
      nzTitle: `B???n c?? mu???n x??a n??ng l???c ${this.comFrame?.title} kh??ng?`,
      nzOkDanger: true,
      nzClassName: 'customPopUp warning',
      nzOnOk: () => {
        return this.remove();
      },
      nzOkText: 'X??a',
      nzCancelText: 'H???y',
      nzOnCancel: () => {
        return;
      },
    });
  }
  remove() {
    if (this.comFrame) {
      this.message.success('Xo?? th??nh c??ng khung n??ng l???c');
      this.service.delete(this.comFrame);
      this.competenceFrameCom.getPageList();
      this.cancel();
    }
  }
  public duplicateClick() {
    this.message.success('Sao ch??p th??nh c??ng khung n??ng l???c');
    this.service.conditionDup = true;
    this.router.navigate(['./competence-frames/create'], {
      state: {
        id: this.comFrame?.id,
      },
    });
  }
}
