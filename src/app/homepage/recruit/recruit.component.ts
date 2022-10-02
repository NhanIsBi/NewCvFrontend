import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recruit',
  templateUrl: './recruit.component.html',
  styleUrls: ['./recruit.component.less'],
})
export class RecruitComponent implements OnInit {
  type = 'Loại hình';
  nature = 'Tính chất công việc';
  specialize = 'Chuyên môn';
  location = 'Địa điểm';
  wage = 'Mức lương';
  experience = 'Kinh nghiệm';
  dataScholarship: string[] = [];
  constructor(private router: Router) {}

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
    this.type = event;
  }
  newsScholarship() {
    this.router.navigate(['./homepage/news-scholarship/']);
  }
}
