import {Component} from '@angular/core';

/**
 * @title Dynamic grid-list
 */
@Component({
  selector: 'grid-tile-div',
  templateUrl: 'grid-tile-div.html',
})
export class GridTileDiv {
    avatars = [
        {path: './assets/avatars/avatar-01.png', title: 'Title 1', text: 'Desc 1 - avatar 01'},
        {path: './assets/avatars/avatar-10.png', title: 'Title 2', text: 'Desc 2 - avatar 10'},
        {path: './assets/avatars/avatar-05.png', title: 'Title 3', text: 'Desc 3 - avatar 05'},
        {path: './assets/avatars/avatar-09.png', title: 'Title 4', text: 'Desc 4 - avatar 09'},
      ];

}