import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resign',
  templateUrl: './resign.component.html',
  styleUrls: ['./resign.component.less'],
})
export class ResignComponent implements OnInit {
  listgender = ['Nam', 'Nữ', 'Giới tính khác'];
  constructor() {}

  ngOnInit(): void {}
  log(data: string): void {
    console.log(data);
  }
}
