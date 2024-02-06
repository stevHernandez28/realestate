import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent   {

  @ViewChild('heroTitle') heroTitleRef!: ElementRef;

  handleBeforeTextChange(): void {
    gsap.to(this.heroTitleRef.nativeElement, {
      marginLeft:'20px',
      duration: 2,
      ease: 'power2.out'
    })

  }
  //181.33
  handleAfterTextChange(element: ElementRef): void {
    // gsap.to(this.heroTitleRef.nativeElement, {
    //   marginLeft:'0',
    //   duration: 1.3,
    //   ease: 'power2.out'
    // })
  
  }


}
