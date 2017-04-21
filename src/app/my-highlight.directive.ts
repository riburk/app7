import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {

  @Input('myHighlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
   }

   @HostListener('mouseenter') onMouserEnter() {
     this.highlight(this.highlightColor || this.defaultColor || 'red');
   }

   @HostListener('mouseleave') onmouseleave() {
     this.highlight(null);
   }

   private highlight(color: string) {
     this.el.nativeElement.style.backgroundColor = color;
   }

}
