import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { newsService } from './services/news.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private sevices: newsService,
    private route: ActivatedRoute
  ) {}
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
      console.log(event);
      this.router.navigate(['news-scholarship'], {
        relativeTo: this.route,
      });
    } else if (event === 'Sự kiện') {
      console.log(event);
      this.router.navigate(['event'], {
        relativeTo: this.route,
      });
    } else if (event === 'Cuộc thi') {
      console.log(event);
      this.router.navigate(['competition'], {
        relativeTo: this.route,
      });
    }
  }
}
