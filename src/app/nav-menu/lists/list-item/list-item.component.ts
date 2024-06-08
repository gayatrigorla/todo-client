import { Mainlist } from './../../../model/mainlist';
import { ListService } from './../../../service/list.service';
import { Component, Input } from '@angular/core';
import { List } from '../../../model/list';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() item!: List;
  @Input() isMainList: boolean = true;
  @Input() refreshList!: () => void;
  apiService: ApiService;

  listService: ListService;

  constructor(apiService:ApiService, listService: ListService) {
    this.apiService = apiService;
    this.listService = listService;
  }

  renameList(item: List) {
    console.log("renaming the list", item);
    this.listService.setRenameMode(true);
    this.listService.setList(item as Mainlist);
  }

  deleteList(item:List) {
    console.log("deleting the list",item);
    this.apiService.deleteList(item.id);
    this.refreshList();
  }

  openList(item: List) {
    if(this.isMainList) {
      this.listService.setRenameMode(false);
      this.listService.setList(item as Mainlist);
    }
  }
}
