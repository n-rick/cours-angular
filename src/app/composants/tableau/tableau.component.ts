import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 1];
  constructor() { }

  ngOnInit(): void {
  }

}
