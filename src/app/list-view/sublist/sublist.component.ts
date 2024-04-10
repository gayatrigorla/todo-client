import { Component } from '@angular/core';

@Component({
  selector: 'app-sublist',
  templateUrl: './sublist.component.html',
  styleUrl: './sublist.component.css'
})
export class SublistComponent {
  list = ['task 1', 'task 2', 'task3'];
}
