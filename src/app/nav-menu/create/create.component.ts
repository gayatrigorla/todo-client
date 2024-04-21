import { Component, Input} from '@angular/core';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  @Input() label: string ='list';
  listName = '';
  apiService: ApiService;
  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  create() {
    console.error(this.listName +  'same');
   this.apiService.createMainList(this.listName);
   this.listName='';
  }
}
