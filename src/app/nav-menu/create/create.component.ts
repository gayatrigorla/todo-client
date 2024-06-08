import { Component, Input } from '@angular/core';
import { ListService } from '../../service/list.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Input() label: string = 'list';
  listName = '';
  apiService: ApiService;
  listService: ListService;
  constructor(apiService: ApiService, listService: ListService) {
    this.apiService = apiService;
    this.listService = listService;
  }

  create() {
    if (this.label == 'list') {
      console.error(this.listName + 'same');
      this.apiService.createMainList(this.listName);
      this.listName = '';
    }
    else {
      console.error(this.listName + 'same');
      this.apiService.createSubList(this.listService.selectedList.value, this.listName);
      this.listName = '';
    }
  }
}
