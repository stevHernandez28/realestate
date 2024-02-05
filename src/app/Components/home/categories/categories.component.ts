import { Component } from '@angular/core';
import { images } from 'src/app/data/Data.mockup';
import { CategoryImages } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  images : CategoryImages[] = images;

}
