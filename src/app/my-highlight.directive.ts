import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter') onMouserEnter() {
     this.highlight('yellow');
   }

   @HostListener('mouseleave') onmouseleave() {
     this.highlight(null);
   }

   private highlight(color: string) {
     this.el.nativeElement.style.backgroundColor = color;
   }

}
