import { TitleService } from './providers/title.service';
import { ITitle } from './models/title.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  searchTerms: FormControl           = null;
  titles$: Observable<Array<ITitle>> = null;

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.searchTerms = new FormControl();
  }

  search(value: string): void {
    if (value) {
      this.titles$ = this.titleService.getByName(value);
    }
  }
}
