import { ITitle } from './models/title.interface';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchTerms: string               = null;
  titles$: Observable<Array<ITitle>> = null;

  constructor(private httpClient: HttpClient) {}

  search(): void {
    if (this.searchTerms) {
      this.titles$ = this.httpClient.get<Array<ITitle>>(`http://localhost:1234/title/search?name=${this.searchTerms}`);
    }
  }
}
