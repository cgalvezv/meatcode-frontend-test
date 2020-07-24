import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
/**
 * Component that renders the information of an article
 * @author cgalvezv
 */
export class ArticleComponent {
  /**
   * Input: Variable that preserves the article info to render
   * @author cgalvezv
   */
  @Input() info: Article;

  constructor() { }

  /**
   * Method that redirects to a particular url, using another browser tab as a target
   * @param url is the url to which you want to redirect
   * @author cgalvezv
   */
  goToUrl(url: string) {
    window.open(url, '_blank');
  }
}
