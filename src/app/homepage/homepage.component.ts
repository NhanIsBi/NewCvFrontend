import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}
  listNews = ['Học bổng', 'Sự kiện', 'Cuộc thi'];
  news = 'Tin tức';
  ngOnInit(): void {}
  page() {
    this.router.navigate(['./homepage/page/']);
  }
  login() {
    this.router.navigate(['./homepage/login']);
  }
  resign() {
    this.router.navigate(['./homepage/resign/']);
  }
  onSelectionChangeNews(event: string) {
    if (event === 'Học bổng') {
      this.router.navigate(['./homepage/scholarship/']);
    } else if (event === 'Sự kiện') {
      this.router.navigate(['./homepage/event']);
    } else if (event === 'Cuộc thi') {
      this.router.navigate(['./homepage/competition/']);
    }
  }
}
