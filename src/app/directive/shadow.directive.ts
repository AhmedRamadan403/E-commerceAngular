import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private ele : ElementRef) { 

  }

  @HostListener('mouseenter') makeShadow(){
    this.ele.nativeElement.classList.add('shadow-lg');
  }

  @HostListener('mouseleave') removeShadow(){
    this.ele.nativeElement.classList.remove('shadow-lg');
  }
}
