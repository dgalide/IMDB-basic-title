import { environment } from './../../environments/environment';
import { ITitle } from './../models/title.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private httpClient: HttpClient) { }

  public getByName(name: string): Observable<Array<ITitle>>{
    return this.httpClient.get<Array<ITitle>>(`${environment.baseUrl}title/search?name=${name}`);
  }

  public updateTitle(id: string, title: ITitle): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}title/${id}/update`, title);
  }
}
