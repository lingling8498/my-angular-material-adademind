import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.css']
})
export class MatCardComponent implements OnInit {
  isChecked: boolean = true;
  m_lightSalmon: string = "#FFA07A";
  m_lightPink: string = "lightpink";
  m_lightPurple: string = "#9400D3";
  m_skyeBlue: string = "#87ceeb";

  tiles = [
    {text: 'One', cols:3, rows:1, color: 'lightblue'},
    {text: 'Two', cols:1, rows:2, color: 'lightgreen'},
    {text: 'Three', cols:1, rows:1, color: 'lightpink'},
    {text: 'Four', cols:2, rows:1, color: '#DDBDF1'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
