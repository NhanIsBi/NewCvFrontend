import { Component, OnInit } from '@angular/core';
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
  listscholarship: string[] = [];
  listlevel: string[] = [];
  listmajors: string[] = [];
  listlocation: string[] = [];
  dataScholarship: scholarship[] = [];
  constructor() // private sevices: newsService
  {}

  ngOnInit(): void {
    // this.dataScholarship = this.sevices.listScholarship;
    // for (let i = 0; i < this.sevices.listScholarship.length; i++) {
    //   this.listscholarship.push(this.sevices.listScholarship[i].scholarship);
    //   this.listlevel.push(this.sevices.listScholarship[i].level);
    //   this.listmajors.push(this.sevices.listScholarship[i].majors);
    //   this.listlocation.push(this.sevices.listScholarship[i].location);
    // }
    // console.log(this.dataScholarship);
  }

  onSelectionChange(event: string) {
    this.scholarship = event;
  }
}
