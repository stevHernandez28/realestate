import { Component, OnInit, HostListener } from '@angular/core';
import { amenities, propertyDetails } from 'src/app/data/Data.mockup';
import { Amenities, PropertyDetails } from 'src/app/interface/interfaces';


@Component({
  selector: 'app-property-details-content',
  templateUrl: './property-details-content.component.html',
  styleUrls: ['./property-details-content.component.scss']
})
export class PropertyDetailsContentComponent implements OnInit {

  propertyDetails : PropertyDetails = propertyDetails;
  amenities : Amenities[] = amenities;


  detailsColumnOne: any = {};
  detailsColumnTwo: any = {};
  

  layout: "horizontal" | "vertical" | undefined = 'vertical';  // Valor inicial

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  ngOnInit(): void {
    this.checkWindowSize();

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

  getAmenitiesColumns(amenities: string[])  : string[][]{
    const columns :string[][]= [];
    for (let i = 0; i < amenities.length; i += 5) {
      columns.push(amenities.slice(i, i + 5));
    }
    return columns;
  }


  private checkWindowSize() : void {
    if (window.innerWidth <= 768) {
      this.layout = 'horizontal';
    } else {
      this.layout = 'vertical';
    }
  }

}
