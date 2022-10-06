import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'ehiring-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css'],
})
export class RightSideComponent {
  @Input() isViewLayout = false;
  @Input() sectionName = '';
  @Input() status = '';
  @Input() container: TemplateRef<unknown> | null = null;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<boolean>();

  onCancel() {
    this.cancel.emit(true);
  }
  onSubmit() {
    this.save.emit(true);
  }
}
