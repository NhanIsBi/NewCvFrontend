import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  dataLevel: string[] = [];
  dataMajors: string[] = [];
  dataLocation: string[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initData();
  }
  initData() {
    this.dataScholarship.push('Toàn phần');
    this.dataScholarship.push('Bán phần');
    this.dataScholarship.push('khác');
    this.dataScholarship.push('Tất cả');
    this.dataLevel.push('Cử nhân');
    this.dataLevel.push('Kỹ sư');
    this.dataLevel.push('Kiến trúc sư');
    this.dataLevel.push('Thạc sĩ');
    this.dataLevel.push('Tiến sĩ');
    this.dataMajors.push('Kinh tế');
    this.dataMajors.push('Công nghệ thông tin');
    this.dataMajors.push('Kiến trúc');
    this.dataMajors.push('Logictist');
    this.dataMajors.push('Mỹ thuật');
    this.dataLocation.push('Đức');
    this.dataLocation.push('Nga');
    this.dataLocation.push('Anh');
    this.dataLocation.push('Úc');
    this.dataLocation.push('Mỹ');
  }
  onSelectionChangeScholarship(event: string) {
    this.scholarship = event;
  }
  onSelectionChangeLevel(event: string) {
    this.level = event;
  }
  onSelectionChangeMajors(event: string) {
    this.majors = event;
  }
  onSelectionChangeLocation(event: string) {
    this.location = event;
  }
  newsScholarship() {
    this.router.navigate(['./homepage/news-scholarship/']);
  }
}
