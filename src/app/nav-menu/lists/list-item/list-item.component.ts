import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() item: string ='';
  @Input() isMainList: boolean = true;

  renameList(item: string) {
    console.log("renaming the list", item)
  }

  deleteList(item:string) {
    console.log("deleting the list",item);
  }

  openList(item: string) {
    console.log("Opening the list", item);
  }
}
