import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeSelect } from './treeSelect';

@Component({
  selector: 'ehiring-dropdown-tree-select',
  templateUrl: './dropdown-tree-select.component.html',
  styleUrls: ['./dropdown-tree-select.component.less'],
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
