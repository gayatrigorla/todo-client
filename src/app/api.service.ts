import { Injectable } from '@angular/core';
import { Mainlist } from './mainlist';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  lists: Mainlist[] = [
    {
      id: 1,
      name: 'List 1',
      items: []
    },
    {
      id: 2,
      name: 'List 2',
      items: []
    },
    {
      id: 3,
      name: 'List 3',
      items: []
    }
  ];

  private nextMainSeq = 4;

  constructor() { }

  getListNames(): Mainlist[] {
    return this.lists;
  }

  createMainList(name: string) {
    let list: Mainlist = {
      id: this.nextMainSeq,
      name: name,
      items: []
    };

    this.lists.push(list);

    this.nextMainSeq++;

  }
}
