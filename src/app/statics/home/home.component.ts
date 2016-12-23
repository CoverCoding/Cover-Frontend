import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class HomeComponent implements OnInit {
  width: number;
  height: number;

  constructor() { }

  ngOnInit() {
    this.adjustSize();
  }

  private adjustSize() {
    this.height = document.documentElement.clientHeight;
  }

  onResize() {
    this.adjustSize();
  }
}
