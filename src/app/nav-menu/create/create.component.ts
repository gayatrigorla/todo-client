import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Input() label: string ='list';
  listName = '';

  createList() {
    console.error(this.listName);
    this.listName = '';
  }
}
