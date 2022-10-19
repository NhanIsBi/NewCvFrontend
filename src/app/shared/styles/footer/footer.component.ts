import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

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

  constructor() {
    console.log(this.rightCornerTemplate);
  }
  onPageIndexChange(event: number) {
    this.pageIndexChange.emit(event);
  }
  onPageSizeChange(event: number) {
    this.pageSizeChange.emit(event);
  }
}
