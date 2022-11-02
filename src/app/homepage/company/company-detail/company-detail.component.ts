import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { mergeMap, tap } from 'rxjs';
import { ComFrame } from '../../model/competence-frames.model';
import { CompanysEntryComponent } from '../companys-entry/companys-entry.component';
import { CompetenceFramesService } from '../services/companys.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.less'],
})
export class CompanyDetailComponent implements OnInit {
  public comFrame: ComFrame | undefined = new ComFrame();
  public id = '';
  public comFrameInfo$ = this.route.params.pipe(
    mergeMap((p) => {
      if (!this.service.isComFrameExist(p['comFrameId'])) {
        this.cancel();
      }
      this.id = p['comFrameId'];
      return this.service.getComFrameInfo(p['comFrameId']);
    }),
    tap((it) => (this.comFrame = it))
  );
  constructor(
    private message: NzMessageService,
    private route: ActivatedRoute,
    private service: CompetenceFramesService,
    private router: Router,
    private competenceFrameCom: CompanysEntryComponent,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.comFrame = this.service.comframe;
  }
  public cancel() {
    this.router.navigate(['./companys/']);
    this.competenceFrameCom.cancelDetailShow();
  }
}
