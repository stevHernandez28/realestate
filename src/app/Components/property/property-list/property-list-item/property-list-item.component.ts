import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.scss']
})
export class PropertyListItemComponent {

    data = [{
        header:{
          image:'./assets/house.jpg',
          title:'FOR RENT',
          price:'$34,900',
          priceRate: 'Month'
        },
        body:{
          title:'New Apartment Nice View',
          address: 'Belmont Gardens, Chicago',
          details: '3 Bed &nbsp; 2 Bath &nbsp; 3450 Square Ft'
        },
        footer:{
          autor: './assets/author.jpg',
          agentName : ''
        }
    }]
}
