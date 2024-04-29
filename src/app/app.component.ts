import { Component } from '@angular/core';
import { appName } from './app.constants';
import { Mainlist } from './model/mainlist';
import { ListService } from './service/list.service';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = appName;
  listService: ListService;
  apiService: ApiService;

  constructor(listService: ListService, apiService: ApiService) {
    this.listService = listService;
    this.apiService = apiService;
  }

  ngOnInit() {
    this.listService.getList().subscribe(i => {
      if(i != 0) {
        this.title = this.apiService.getMainListFromId(i).name;
      } else {
        this.title = appName;
      }
    });
  }

  isNoListSelected() {
    return this.title === appName;
  }
}
