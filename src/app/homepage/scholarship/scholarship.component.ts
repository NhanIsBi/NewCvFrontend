import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship',
  templateUrl: './scholarship.component.html',
  styleUrls: ['./scholarship.component.less'],
})
export class ScholarshipComponent implements OnInit {
  scholarship = 'Loại học bổng';
  level = 'Trình độ';
  majors = 'Ngành học';
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
    this.scholarship = event;
  }
}
