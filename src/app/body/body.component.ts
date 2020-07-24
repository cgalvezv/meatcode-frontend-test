import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
/**
 * Body component that shows the articles and the menu that allows to filter by category
 * @author cgalvezv
 */
export class BodyComponent {
  // Is the current option selected in the menú
  menuSelected = 'Todos';
  // Are all option in the menú
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
  ];

  constructor() { }

  /**
   * Method that changes the selected option within the menu
   * @param name is the new option to be selected
   * @author cgalvezv
   */
  changeMenu(name: string) {
    this.menuSelected = name;
  }

}
