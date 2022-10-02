import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  page() {
    this.router.navigate(['./homepage/page/']);
  }
  scholarship() {
    this.router.navigate(['./homepage/scholarship/']);
  }
  event() {
    this.router.navigate(['./homepage/event']);
  }
  competition() {
    this.router.navigate(['./homepage/competition/']);
  }
}
