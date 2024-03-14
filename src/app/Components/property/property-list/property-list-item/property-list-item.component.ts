import { Component, Input } from '@angular/core';
import { PropertyListItem} from 'src/app/interface/interfaces';

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss']
})
export class PropertyListItemComponent {

  @Input()
  PropertyList : PropertyListItem = {
    id: 1,
    guid: '',
    header: {
      image: '',
      title: '',
      price: '',
      priceRate: ''
    },
    body: {
      title: '',
      address: '',
      details: '',
    },
    footer: {
      autor: '',
      agentName: '',
      agentOcupation: ''
    }
  }


}
