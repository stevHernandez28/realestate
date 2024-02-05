import { Component, OnInit } from '@angular/core';
import { propertyDetails } from 'src/app/data/Data.mockup';
import { PropertyDetails } from 'src/app/interface/interfaces';


@Component({
  selector: 'app-property-details-content',
  templateUrl: './property-details-content.component.html',
  styleUrls: ['./property-details-content.component.scss']
})
export class PropertyDetailsContentComponent implements OnInit {

  propertyDetails : PropertyDetails = propertyDetails;
  detailsColumnOne: any = {};
  detailsColumnTwo: any = {};
  
  ngOnInit(): void {
    const keys = Object.keys(this.propertyDetails);
    const middle = Math.ceil(keys.length / 2);

    keys.slice(0, middle).forEach((key) => {
      if(this.propertyDetails[key]!== '')
      {
        this.detailsColumnOne[key] =  this.propertyDetails[key];
      }
    
    });

    keys.slice(middle).forEach((key) => {
      this.detailsColumnTwo[key] = this.propertyDetails[key];
    });
  }


  objectKeys(obj: any): any {
    return Object.keys(obj);
  
  }
}
