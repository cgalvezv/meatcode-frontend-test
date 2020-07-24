import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
/**
 * Component that contains the list of articles shown. Added support for filter by category
 * @author cgalvezv
 */
export class ArticlesComponent implements OnChanges {
  /**
   * Input: Variable that preserves the currently selected menu option
   * @author cgalvezv
   */
  @Input() menuSelected: string;

  // Is the list of articles
  articles: Article[];
  // Is loading content variable
  isLoading: boolean;
  constructor(
    private backendSrv: BackendService
  ) { }

  /**
   * These are the changes received in the component. Use it to reset the item list,
   * after changing the selected option within the menú.
   * @author cgalvezv
   */
  ngOnChanges(changes: SimpleChanges): void {
    // are change in selected option
    if (!!changes.menuSelected) {
      const filter = changes.menuSelected.currentValue !== 'Todos' ?
          changes.menuSelected.currentValue : null;
      // restart the list
      this.initContent(filter);
    }
  }

  /**
   * Method that obtains the list of items, using as parameter, the option selected in the menu.
   * @param filter is the current selected option menu
   * @author cgalvezv
   */
  private initContent(filter: string) {
    // show loading state
    this.isLoading = true;
    // Apply request to get article list, using the current selected option in the menú
    this.backendSrv.getArticles(filter)
      .subscribe(articles => {
        // stop loading state
        this.isLoading = false;
        if (!!articles) {
          // Render articles in the component
          this.articles = articles;
        }
      });
  }

}
