import { Injectable } from '@angular/core';
import { Mainlist } from '../model/mainlist';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  selectedList: BehaviorSubject<number>;
  constructor() {
    this.selectedList = new BehaviorSubject<number>(0);
  }

  getList() {
    return this.selectedList.asObservable();
  }

  setList(list: Mainlist) {
    this.selectedList.next(list.id);
  }
}
