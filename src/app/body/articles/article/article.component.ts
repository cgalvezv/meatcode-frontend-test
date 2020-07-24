import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { goToUrl } from 'src/app/shared/utils.functions';

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

  // access to a given url
  href = (url: string) => {
    goToUrl(url);
  }

  constructor() { }
}
