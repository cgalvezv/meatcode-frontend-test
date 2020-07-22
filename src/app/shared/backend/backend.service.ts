import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARTICLE_ENDPOINT, SUBSCRIBE_ENDPOINT } from './backend.constants';
import { Subscriptor } from '../models/subscriptor.model';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    protected http: HttpClient
  ) { }

  getArticles(filter?: string): Observable<Article[]>  {
    let parameters = null;
    if (!!filter) {
      parameters = new HttpParams().append('filter', filter);
    }
    return this.http.get<Article[]>(ARTICLE_ENDPOINT, {params: !!parameters ? parameters : null});
  }

  postSuscribe(subs: Subscriptor): Observable<any> {
    return this.http.post(SUBSCRIBE_ENDPOINT,  subs);
  }
}
