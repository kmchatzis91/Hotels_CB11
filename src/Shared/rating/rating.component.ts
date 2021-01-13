import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.CreateArrayOfStars();
  }

  ngOnInit(): void {
  }

  @Input() ratingNo: number = 0;
  starsNum: number = 0;
  Stars: number[] = [];

  CreateArrayOfStars(): void {
      this.starsNum = Math.round(this.ratingNo);
      this.Stars = Array(this.starsNum);
  }

 

}
