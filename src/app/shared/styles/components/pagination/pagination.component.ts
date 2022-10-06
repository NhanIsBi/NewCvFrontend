import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less'],
})
export class PaginationComponent {
  @Input() currentPage = 0;
  @Input() itemPerPage = 10;
  @Input() totalItem = 10;

  @Output() currentPageChange = new EventEmitter<number>();

  minPage = 0;
  maxPage = 0;
  maxShowPage = 7;

  isStartInterval = true;
  isEndInterval = false;

  getPageNumber() {
    const pageNumber = Math.ceil(this.totalItem / this.itemPerPage) || 1;

    this.maxPage = pageNumber - 1;

    const pageArray = Array.from(Array(pageNumber).keys()).filter(
      (page) => page != this.maxPage && page != this.minPage
    );

    let resultPageArray: number[] = [];
    if (pageNumber > this.maxShowPage) {
      const currentPageIdx = pageArray.indexOf(this.currentPage);

      const maxIdx = pageArray.length - 1;
      if (currentPageIdx != -1) {
        if (currentPageIdx > 2 && currentPageIdx < maxIdx - 2) {
          resultPageArray = pageArray.slice(
            currentPageIdx - 2,
            currentPageIdx + 3
          );
          this.setPageInterval(0);
        } else if (currentPageIdx <= 2) {
          resultPageArray = pageArray.slice(0, 5);
          this.setPageInterval(-1);
        } else if (currentPageIdx >= maxIdx - 2) {
          resultPageArray = pageArray.slice(maxIdx - 4, maxIdx + 1);
          this.setPageInterval(1);
        }
      } else {
        if (this.currentPage == this.minPage) {
          resultPageArray = pageArray.slice(0, 5);
          this.setPageInterval(-1);
        } else {
          resultPageArray = pageArray.slice(this.maxPage - 6);
          this.setPageInterval(1);
        }
      }
    } else {
      resultPageArray = pageArray;
      this.setPageInterval(2);
    }

    return resultPageArray.filter(
      (page) => page != this.maxPage && page != this.minPage
    );
  }

  setCurrentPage(selectedPage: number) {
    if (selectedPage != this.currentPage) {
      this.currentPage = selectedPage;
      this.currentPageChange.emit(selectedPage);
    }
  }

  nextPage() {
    this.setCurrentPage(this.currentPage + 1);
  }

  previousPage() {
    this.setCurrentPage(this.currentPage - 1);
  }

  setPageInterval(mode: number) {
    if (mode == -1) {
      this.isStartInterval = true;
      this.isEndInterval = false;
    } else if (mode == 0) {
      this.isStartInterval = false;
      this.isEndInterval = false;
    } else if (mode == 1) {
      this.isStartInterval = false;
      this.isEndInterval = true;
    } else {
      this.isStartInterval = true;
      this.isEndInterval = true;
    }
  }
}
