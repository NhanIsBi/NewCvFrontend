import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { fa_IR, NzI18nService, vi_VN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() customClassName = '';
  @Input() rightCornerTemplate: TemplateRef<unknown> | null = null;
  @Input() leftCornerTemplate: TemplateRef<unknown> | null = null;
  @Input() pageIndex: number | null = 1;
  @Input() pageSize: number | null = 15;
  @Input() total = 0;
  @Input() simple = false;
  @Output() pageIndexChange = new EventEmitter();
  @Output() pageSizeChange = new EventEmitter();

  constructor(private i18n: NzI18nService) {
    console.log(this.rightCornerTemplate);
  }
  ngOnInit(): void {
    this.i18n.setLocale(vi_VN);
  }
  onPageIndexChange(event: number) {
    this.pageIndexChange.emit(event);
  }
  onPageSizeChange(event: number) {
    this.pageSizeChange.emit(event);
  }
}
