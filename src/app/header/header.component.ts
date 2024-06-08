import { Component, Input } from '@angular/core';
import { ListService } from '../service/list.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = '';
  listService: ListService;
  apiService: ApiService;
  renameMode: boolean = false;

  constructor(listService: ListService, apiService: ApiService) {
    this.listService = listService;
    this.apiService = apiService;
  }

  ngOnInit() {
    this.listService.isRenameMode().subscribe(i => this.renameMode = i);
  }

  renameList(newName: string) {
    if(newName.length == 0) {
      alert(`Invalid name: '${newName}'`);
      return;
    }
    this.apiService.renameList(this.listService.selectedList.value, newName);
    this.listService.renameSelectedList(newName);
  }
}
