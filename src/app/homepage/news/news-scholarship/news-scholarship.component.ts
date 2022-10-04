import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { scholarship } from '../../model/news.model';
import { newsService } from '../../services/news.service';

@Component({
  selector: 'app-news-scholarship',
  templateUrl: './news-scholarship.component.html',
  styleUrls: ['./news-scholarship.component.less'],
})
export class NewsScholarshipComponent implements OnInit {
  scholarship = 'Loại học bổng';
  level = 'Trình độ';
  majors = 'Ngành học';
  location = 'Địa điểm';
  dataScholarship: string[] = [];
  dataLevel: string[] = [];
  dataMajors: string[] = [];
  dataLocation: string[] = [];
  listScholarship: scholarship[] = [];
  constructor(private router: Router, private sevices: newsService) {}

  ngOnInit(): void {
    this.initData();
    this.listScholarship = this.sevices.listScholarship;
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
}
