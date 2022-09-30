import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { optionDropdown } from './optionDropdown.model';

@Component({
  selector: 'ehiring-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
})
export class DropdownComponent {
  @Input() temRef: TemplateRef<unknown> | null = null;
  @Input() data: string[] = [];
  @Output() selectionChange = new EventEmitter<string>();
  onClick(idx: number) {
    // to do
    // this.data[idx].value = !this.data[idx].value;

    this.selectionChange.emit(this.data[idx]);
  }
}
