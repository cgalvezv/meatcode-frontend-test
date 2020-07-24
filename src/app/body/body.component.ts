import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  menuSelected = 'Todos';
  menuButtons = [
    {
      id: 1,
      name: 'Todos',
    },
    {
      id: 2,
      name: 'Productos'
    },
    {
      id: 3,
      name: 'Recetas'
    },
    {
      id: 4,
      name: 'Consejos'
    }
  ]

  constructor() { }

  changeMenu(name: string) {
    this.menuSelected = name;
  }

}
