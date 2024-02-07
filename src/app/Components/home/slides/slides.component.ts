import { Component } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent {
  slides = [
    { id: 1, content: 'HOUSE', url:'./assets/gallery/hom3.jpg' },
    { id: 2, content: 'APARTAMENT',url:'./assets/gallery/hom2.jpg'},
    { id: 3, content: 'LAND',url:'./assets/gallery/hom4.jpg' },
  ];
}
