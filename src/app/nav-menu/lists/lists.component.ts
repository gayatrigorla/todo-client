import { Component } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.css'
})
export class ListsComponent {
  items : string[] = ["snehal", "gayatri"];
}
