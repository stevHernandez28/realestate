import { Directive, ElementRef, Input, OnInit, OnDestroy  } from '@angular/core';
import { gsap } from 'gsap';
@Directive({
  selector: '[appChangeTextAnimation]'
})
export class ChangeTextAnimationDirective implements OnInit, OnDestroy {
  @Input() textArray: string[] = [];
  @Input() animationDuration: number = 0.5; // Duración de la animación de cambio de texto

  private currentIndex: number = 0;
  private intervalId: any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    if (this.textArray.length > 1) {
      this.startTextAnimation();
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startTextAnimation(): void {
    this.intervalId = setInterval(() => {
      this.changeText();
    }, 2000 + this.animationDuration * 1000); 
  }

  private changeText(): void {


    gsap.to(this.el.nativeElement, {
      duration: this.animationDuration,
      opacity: 0,
      ease: 'power4.out',

      onComplete: () => {
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        this.el.nativeElement.innerText = this.textArray[this.currentIndex];
        gsap.to(this.el.nativeElement, {
          duration: this.animationDuration,
          opacity: 1      ,
            ease: 'power4.out'
        });
      }
    });
  }

}
