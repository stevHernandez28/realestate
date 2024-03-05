import { Component } from '@angular/core';
import { dataPropertyList } from 'src/app/data/Data.mockup';
import { PropertyListItem } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  data : PropertyListItem[]  = dataPropertyList;
}
