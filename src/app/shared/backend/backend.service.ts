import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARTICLE_ENDPOINT, SUBSCRIBE_ENDPOINT } from './backend.constants';
import { Subscriptor } from '../models/subscriptor.model';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
/**
 * Service that connects to the API that delivers the information to render
 * the articles and create a newsletter subscription
 * @author cgalvezv
 */
export class BackendService {

  constructor(
    protected http: HttpClient // Angular http client
  ) { }

  /**
   * Method that uses the endpoint to obtain the list of articles,
   * and if required, apply the filter by category as well
   * @param filter is the category by which you want to obtain the filtered results
   * @author cgalvezv
   */
  getArticles(filter?: string): Observable<Article[]>  {
    let parameters = null;
    // is filter exist, create params
    if (!!filter) {
      parameters = new HttpParams().append('filter', filter);
    }
    return this.http.get<Article[]>(ARTICLE_ENDPOINT, {params: !!parameters ? parameters : null});
  }

  /**
   * Method the endpoint uses to create a subscription
   * @param subs is the information of the subscription you want to create
   * @author cgalvezv
   */
  postSuscribe(subs: Subscriptor): Observable<any> {
    return this.http.post(SUBSCRIBE_ENDPOINT,  subs);
  }
}
