import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective implements AfterViewInit  {

 
  constructor(private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.initParallax();
  }

  private initParallax(): void {
    let slide = this.el.nativeElement;
    let bg = slide.querySelector(".background");
    let content = slide.querySelector(".content");
    let getRatio = (el: Element) => window.innerHeight / (window.innerHeight + el.clientHeight);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: slide,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });

    tl.fromTo(bg, {
      y: () => -window.innerHeight * getRatio(slide)
    }, {
      y: () => window.innerHeight * (1 - getRatio(slide)),
      ease: "none"
    });
    tl.fromTo(content, {
      y: () => window.innerHeight * -getRatio(slide) * 2
    }, {
      y: () => window.innerHeight * getRatio(slide) * 2,
      ease: "none"
    }, 0);
  }

}
