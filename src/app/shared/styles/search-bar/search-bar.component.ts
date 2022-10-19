import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less'],
})
export class SearchBarComponent {
  @Input() isShown = true;
  @Input() isRealtime = false;
  @Input() listOfSearches: string[] = [];
  @Output() listOfSearchesChange = new EventEmitter<string[]>();
  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter<string>();
  onChangeInput(event: string) {
    this.searchText = event;
    if (!this.isRealtime) return;
    this.searchTextChange.emit(this.searchText);
  }
  onSearchInputEnter() {
    if (this.isRealtime) return;
    this.searchText = this.searchText.trim();
    if (this.searchText.length === 0) return;
    if (this.listOfSearches.includes(this.searchText)) {
      this.searchText = '';
      return;
    }
    this.searchTextChange.emit(this.searchText);
    this.listOfSearches.push(this.searchText);
    this.listOfSearchesChange.emit(this.listOfSearches);
    this.searchText = '';
  }
  onClose(idx: number) {
    this.listOfSearches.splice(idx, 1);
    this.listOfSearchesChange.emit(this.listOfSearches);
  }
  onClear() {
    this.listOfSearches.splice(0, this.listOfSearches.length);
    this.listOfSearchesChange.emit(this.listOfSearches);
  }
}
