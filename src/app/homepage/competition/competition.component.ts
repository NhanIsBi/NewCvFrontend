import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.less'],
})
export class CompetitionComponent implements OnInit {
  category = 'Thể loại cuộc thi';
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
