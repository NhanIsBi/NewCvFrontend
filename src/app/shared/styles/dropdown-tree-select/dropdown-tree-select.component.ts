import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TreeSelect } from 'src/app/homepage/model/treeSelect.model';

@Component({
  selector: 'app-dropdown-tree-select',
  templateUrl: './dropdown-tree-select.component.html',
})
export class DropdownTreeSelectComponent {
  @Input() data: TreeSelect[] = [];
  @Input() clearButton = true;
  @Output() choose: EventEmitter<{
    idx: number;
    key: string;
    text: string;
    value: boolean;
  }> = new EventEmitter();
  @Output() clear: EventEmitter<boolean> = new EventEmitter();
  onSelect(idx: number, key: string, text: string, value: boolean) {
    this.choose.emit({ idx: idx, key: key, text: text, value: value });
  }
  onClear() {
    this.clear.emit(true);
  }
}
