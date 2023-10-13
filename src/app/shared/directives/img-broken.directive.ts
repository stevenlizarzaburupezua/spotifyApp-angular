import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = ''
  @HostListener('error') handleError(): void {
    console.log('Es') 
  }

  constructor(private elHost: ElementRef) {
    console.log(this.elHost);
   }

}
