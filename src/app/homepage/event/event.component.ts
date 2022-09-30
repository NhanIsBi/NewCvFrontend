import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less'],
})
export class EventComponent implements OnInit {
  category = 'Thể loại sự kiện';
  location = 'Địa điểm';
  dataScholarship: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.initDataScholarship();
  }
  initDataScholarship() {
    this.dataScholarship.push('FPT Telecom');
    this.dataScholarship.push('FPT Infomation system');
    this.dataScholarship.push('SENDO');
    this.dataScholarship.push('FPT Shop');
    this.dataScholarship.push('FPT Software');
  }
  onSelectionChange(event: string) {
    this.category = event;
  }
}
