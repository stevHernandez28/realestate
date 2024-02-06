import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import SplitType from 'split-type';



@Directive({
  selector: '[appFadeInAnimation]'
})
export class FadeInAnimationDirective implements OnInit {
  @Input() appFadeInAnimation!: number;



  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.animateElement();
  }
  private animateElement(): void {

      const split = new SplitType(this.el.nativeElement, { types: 'chars' });
      const duration = this.appFadeInAnimation || 2; 
    gsap.fromTo(
      split.chars,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration,
        ease: 'power4.out',
      }
    );
  
  }
}
