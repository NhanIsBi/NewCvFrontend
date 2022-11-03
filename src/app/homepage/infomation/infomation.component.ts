import { Component, OnInit } from '@angular/core';
import { user } from '../model/news.model';
import { newsService } from '../services/news.service';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.less'],
})
export class InfomationComponent implements OnInit {
  user: user = new user();
  constructor(private service: newsService) {
    this.user = service.userLogin;
    console.log('user', this.user);
  }

  ngOnInit(): void {}
}
