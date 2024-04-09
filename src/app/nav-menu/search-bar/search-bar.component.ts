import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  search : string ="";
  
  searchList(search:string) {
    console.log(search);
  };

  clearSearch() {
    this.search = '';
  }
}
