import { Injectable } from '@angular/core';
import { Mainlist } from '../model/mainlist';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  selectedList: BehaviorSubject<Mainlist|null>;
  constructor() {
    this.selectedList = new BehaviorSubject<Mainlist|null>(null);
  }

  getList() {
    return this.selectedList.asObservable();
  }

  setList(list: Mainlist) {
    this.selectedList.next(list);
  }
}
