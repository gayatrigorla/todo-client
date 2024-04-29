import { Injectable } from '@angular/core';
import { Mainlist } from '../model/mainlist';
import { Sublist } from '../model/sublist';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  lists: Mainlist[] = [
    {
      id: 1,
      name: 'List 1',
      items: [
        {
          id: 1,
          name: 'Sublist 1',
          isCompleted: false,
          rank: 1
        },
        {
          id: 2,
          name: 'Sublist 2',
          isCompleted: false,
          rank: 1
        },
        {
          id: 3,
          name: 'Sublist 3',
          isCompleted: false,
          rank: 1
        }
      ]
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

  getMainListFromId(id: number): Mainlist {
    return this.lists[this.getIndexOfMainList(id)];
  }

  getSubListFromId(id: number): Sublist[] {
    return this.getMainListFromId(id).items;
  }

  private getIndexOfMainList(id: number) {
    for(let i=0; i<this.lists.length; i++) {
      if(this.lists[i].id == id) {
        return i;
      }
    }

    return -1;
  }

  deleteList(id: number) {
    let ind = this.getIndexOfMainList(id);
    this.lists.splice(ind, 1);
    console.log(this.lists);
  }

  renameList(oldName: string, newName: string) {
    const itemToUpdate = this.lists.find(item =>item.name==oldName);
    if(itemToUpdate){
      itemToUpdate.name=newName;
    }
  }
}
