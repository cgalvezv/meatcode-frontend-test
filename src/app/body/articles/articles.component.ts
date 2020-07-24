import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BackendService } from 'src/app/shared/backend/backend.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnChanges {
  @Input() menuSelected: string;

  articles: Article[];
  isLoading: boolean;
  constructor(
    private backendSrv: BackendService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes.menuSelected) {
      const filter = changes.menuSelected.currentValue !== 'Todos' ?
          changes.menuSelected.currentValue : null;
      this.initContent(filter);
    }
  }

  private initContent(filter: string) {
    this.isLoading = true;
    this.backendSrv.getArticles(filter)
      .subscribe(articles => {
        this.isLoading = false;
        if (!!articles) {
          this.articles = articles;
        }
      });
  }

}
