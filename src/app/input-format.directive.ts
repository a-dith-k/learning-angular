import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  elem:ElementRef;
  constructor(elem:ElementRef) {
    this.elem = elem;
  }

  @HostListener('focus')onFocus(){
    console.log('on focus')
  }

  @HostListener('blur')onBlur(){
     let inputValue
            =this.elem.nativeElement.value;

    this.elem.nativeElement.value=inputValue.toLowerCase();
  }


}
