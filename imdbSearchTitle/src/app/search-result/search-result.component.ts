import { ITitle } from './../models/title.interface';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultComponent implements OnInit {

  @Input() titles: Array<ITitle> = [];

  columns = ['primaryTitle', 'originalTitle', 'isAdult', 'startYear'];

  constructor() { }

  ngOnInit() {
  }

}
