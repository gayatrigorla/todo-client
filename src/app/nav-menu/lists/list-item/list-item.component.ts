import { Component, Input } from '@angular/core';
import { List } from '../../../model/list';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() item!: List;
  @Input() isMainList: boolean = true;

  renameList(item: List) {
    console.log("renaming the list", item)
  }

  deleteList(item:List) {
    console.log("deleting the list",item);
  }

  openList(item: List) {
    console.log("Opening the list", item);
  }
}
