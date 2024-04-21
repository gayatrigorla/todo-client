import { Component } from '@angular/core';
import { Sublist } from '../../model/sublist';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrl: './sublist.component.css'
})
export class SublistComponent {
  list: Sublist[] = [];
}
