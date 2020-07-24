import { Component, OnInit } from '@angular/core';
import { goToUrl } from '../shared/utils.functions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // access to a given url
  href = (url: string) => {
    goToUrl(url);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
