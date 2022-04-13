import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIncrease]'
})
export class IncreaseDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.height='120px';
    el.nativeElement.style.width='100px';
  }
@HostListener('click') onClick(){
   this.el.nativeElement.style.height='180px';
   this.el.nativeElement.style.width='140px';
}
}
