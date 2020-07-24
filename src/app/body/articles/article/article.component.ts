import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() info: Article;

  constructor() { }

  ngOnInit(): void {
  }

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

}
