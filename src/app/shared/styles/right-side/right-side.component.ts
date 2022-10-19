import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
})
export class RightSideComponent {
  @Input() containerTitle = true;
  @Input() isPrimary = true;
  @Input() isViewLayout = false;
  @Input() sectionName = '';
  @Input() status = '';
  @Input() loading = false;
  @Input() container: TemplateRef<unknown> | null = null;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<boolean>();
  @Output() scrollChange = new EventEmitter<boolean>();
  onCancel() {
    this.cancel.emit(true);
  }
  onSubmit() {
    this.save.emit(true);
  }
  onScroll() {
    this.scrollChange.emit(true);
  }
}
