import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Mainlist } from '../../model/mainlist';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  items : Mainlist[] = [];
  apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.items = this.apiService.getListNames();
  }
}
