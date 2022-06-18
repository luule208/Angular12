import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = 'blue';
  constructor(private el: ElementRef) {
    console.log('appHighlight');
  }

  ngOnInit(): void {
    if (!this.appHighlight) {
      this.el.nativeElement.style.color = 'blue';
    } else {
      this.el.nativeElement.style.color = this.appHighlight;
    }
  }
}
