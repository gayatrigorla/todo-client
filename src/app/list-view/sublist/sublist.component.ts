import { Component } from '@angular/core';
import { Sublist } from '../../model/sublist';
import { ListService } from '../../service/list.service';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrl: './sublist.component.css'
})
export class SublistComponent {
  list: Sublist[] = [];
  id: number = 0;
  listService: ListService;
  apiService: ApiService;

  //for dragging
  selectedItem: Sublist | undefined;

  constructor(listService: ListService, apiService: ApiService) {
    this.listService = listService;
    this.apiService = apiService;
  }

  ngOnInit() {
    this.listService.getList().subscribe(i => {
      this.id = i;
      this.fetchItems();
    });
  }


  fetchItems() {
    if(this.id != 0) {
      this.list = this.apiService.getSubListFromId(this.id);
    }
  }

  onDragStart(i: Sublist) {
    this.selectedItem = i;
  }

  onDragOver(event: Event, i: number) {
    event.preventDefault();
    console.log(`drag over ${i}`);
  }

  onDrop(event: Event, rank: number) {
    event.preventDefault();
    console.log('dropped');
    if(rank == this.selectedItem!.rank) {
      return;
    }
    console.log(this.id, this.selectedItem, rank);
    this.apiService.changeRank(this.id, this.selectedItem, rank);
    this.fetchItems();
  }
}

