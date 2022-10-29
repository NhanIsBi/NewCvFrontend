import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { user } from '../model/news.model';
import { newsService } from '../services/news.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public listgender = ['Nam', 'Nữ', 'Khác'];
  email = '';
  pass = '';
  user: user = new user();
  subjects: any;
  constructor(
    private service: newsService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.user.email = this.email;
    this.user.password = this.pass;
    this.service.login(this.user).subscribe((res) => {
      this.subjects = res.data;
      console.log(this.subjects);
      if (this.subjects == null) {
        this.message.success('Đăng nhập thất bại');
      } else {
        this.message.success('Đăng nhập thành công');
        this.router.navigate(['./homepage/page']);
      }
    });

    // this.router.navigate(['./homepage/page']);
  }
}
