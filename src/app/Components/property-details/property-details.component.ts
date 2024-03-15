import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { image, propertyDetailsContent } from 'src/app/interface/interfaces';
import { PropertyDetailsService } from 'src/app/services/property-details.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})


export class PropertyDetailsComponent implements OnInit{

  propertyContent! :  propertyDetailsContent
 
  constructor(private activatedRoute : ActivatedRoute, private detailsService: PropertyDetailsService){

  }

  ngOnInit(){ 

    this.activatedRoute.params.subscribe( params =>{
      const id = +params['id'];
      this.loadPropertyDetails(id);
    })
  }
  loadPropertyDetails(id: number) {
    this.detailsService.GetAllDetails(id).subscribe({
      next:(data)=>{
          this.propertyContent = data;
      },
      error:(e)=>{
        console.log(e);
      }
    });
  } 
  //todo: eniviar desde el componente de detalles todos los datos que necesitan los componentes hijos
  //TODO: hacer un servicio que por medio de la url + GUID pueda consultar una data y agregarlos al componente



  image: image[] = [
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
    {
      url: './assets/image.jpeg'
    },
  ]

}
