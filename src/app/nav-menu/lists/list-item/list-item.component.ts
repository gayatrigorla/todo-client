import { Component, Input } from '@angular/core';
import { List } from '../../../model/list';
import { ApiService } from '../../../api.service';
import { ListsComponent } from '../lists.component';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  
  @Input() item!: List;
  @Input() isMainList: boolean = true;
  apiService:ApiService;
  listsComponent : ListsComponent;


  constructor(apiService:ApiService, listsComponent:ListsComponent) {
    this.apiService = apiService;
    this.listsComponent = listsComponent;
  }


  renameList(item: List) {
    console.log("renaming the list", item)
  }


  deleteList(item:List) {
    console.log("deleting the list",item);
    this.apiService.deleteList(item.name);
    this.listsComponent.ngOnInit();
  }


  openList(item: List) {
    console.log("Opening the list", item);
  }

}
