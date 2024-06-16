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
          rank: 2
        },
        {
          id: 3,
          name: 'Sublist 3',
          isCompleted: false,
          rank: 3
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
    return this.getMainListFromId(id).items.sort((a,b) => a.rank-b.rank);
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

  changeRank(id: number, selectedItem: Sublist | undefined, rank: number) {


    // dummy logic
    let listIndex = -1;
    for(let i=0; i<this.lists.length; i++) {
      if(this.lists[i].id == id) {
        listIndex = i;
        break;
      }
    }

    if(listIndex == -1) {
      console.error("list not found");
      return;
    }

    let oldRank = selectedItem!.rank;
    if(rank == oldRank) {
        return;
    }

    if(rank < oldRank) {
        this.downgradeRank(this.lists[listIndex].items, oldRank, rank);
    } else {
        this.upgradeRank(this.lists[listIndex].items, oldRank, rank);
    }
  }

  upgradeRank(items: Sublist[], oldRank: number, rank: number) {
    let ii;

    for(let i of items) {
      if(i.rank == oldRank) {
        ii=i;
      } else if(oldRank < i.rank && i.rank <= rank) {
        i.rank--;
      }
    }

    ii!.rank = rank;
  }

  downgradeRank(items: Sublist[], oldRank: number, rank: number) {

    let ii;

    for(let i of items) {
      if(i.rank == oldRank) {
        ii = i;
      } else if(i.rank >= rank && i.rank < oldRank) {
        i.rank++;
      }
    }

    ii!.rank = rank;
  }
}


