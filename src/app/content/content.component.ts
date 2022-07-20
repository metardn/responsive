import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  image = [
    "assets/bnw/1.jpg",
    "assets/bnw/2.jpg",
    "assets/bnw/3.jpg",
    "assets/bnw/4.jpg",
    "assets/bnw/5.jpg",
    "assets/bnw/6.jpg",
    "assets/bnw/7.jpg"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
