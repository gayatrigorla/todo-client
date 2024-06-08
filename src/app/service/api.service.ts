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
  private nextSubSeq = 4;

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

  createSubList(id: number,name: string) {
    const mainList = this.lists.find(list => list.id === id);

    if (mainList) {
      const newSublist: Sublist = {
        id: this.nextSubSeq,
        name: name,
        isCompleted: false,
        rank: 1
      };

      mainList.items.push(newSublist);
      this.nextSubSeq++;
    } else {
      console.error(`Main list with ID ${id} not found.`);
    }
  }

  getMainListFromId(id: number): Mainlist {
    return this.lists[this.getIndexOfMainList(id)];
  }

  getSubListFromId(id: number): Sublist[] {
    return this.getMainListFromId(id).items;
  }

  private getIndexOfMainList(id: number) {
    for (let i = 0; i < this.lists.length; i++) {
      if (this.lists[i].id == id) {
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

  renameList(id: number, newName: string) {
    const itemToUpdate = this.lists.find(item => item.id == id);
    if (itemToUpdate) {
      itemToUpdate.name = newName;
    }
  }
}
