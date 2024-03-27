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
  image! : image[];
  constructor(private activatedRoute : ActivatedRoute, private detailsService: PropertyDetailsService){

  }

  ngOnInit(){ 

    this.activatedRoute.params.subscribe( params =>{
      const id = +params['id'];
      this.loadPropertyDetails(id);
    })
  }
  loadPropertyDetails(id: number) {
    this.detailsService.GetPropertyDetailsContentById(id).subscribe({
      next:(data)=>{
          this.propertyContent = data;
      },
      error:(e)=>{
        console.log(e);
      }
    });

    this.detailsService.GetPropertyDetailCarruselById(id).subscribe({
      next:({ gallery })=>{
        this.image = gallery
        console.log(this.image);
      },
      error:(e)=>{
        console.log(e)
      }
    })
  } 

}
