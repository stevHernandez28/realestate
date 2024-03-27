import { Component, Input, OnInit } from '@angular/core';
import { image } from 'src/app/interface/interfaces';


@Component({
  selector: 'app-property-details-carrusel',
  templateUrl: './property-details-carrusel.component.html',
  styleUrls: ['./property-details-carrusel.component.scss']
})

export class PropertyDetailsCarruselComponent implements OnInit {

  @Input()
  images: image[] = [];

  responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1  
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
    ]
  }


} 
