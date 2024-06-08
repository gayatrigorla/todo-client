import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Mainlist } from '../model/mainlist';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  selectedList: BehaviorSubject<number>;
  renameMode: BehaviorSubject<boolean>;

  constructor(apiService: ApiService) {
    this.selectedList = new BehaviorSubject<number>(0);
    this.renameMode = new BehaviorSubject<boolean>(false);
  }

  getList() {
    return this.selectedList.asObservable();
  }

  setList(list: Mainlist|null) {
    if(!list) {
      this.selectedList.next(0);
    }
    this.selectedList.next(list!.id);
  }

  setRenameMode(mode: boolean) {
    this.renameMode.next(mode);
  }

  isRenameMode() {
    return this.renameMode.asObservable();
  }

  renameSelectedList(newName: string) {
    console.log('renaming');
    let id=this.selectedList.value;
    if(id == 0) {
      return;
    }
    this.renameMode.next(false);
  }
}
