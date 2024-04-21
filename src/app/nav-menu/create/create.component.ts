import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Input() label: string ='list';
  listName = '';

  create() {
    console.error(this.listName +  'same');
    this.listName = '';
  }
}
