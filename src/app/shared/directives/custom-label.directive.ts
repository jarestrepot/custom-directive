import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

// Se trata como un componente, también permite ser un standAlone
@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  // Cambiar el valor de la directiva
  @Input() set color( value: string ){
    this._color = value;
    this.setStyleElement();
  }

  @Input() set errors( error: ValidationErrors | null | undefined ){
    this._errors = error;
    this.setErrorMessage();
  }


  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = 'Hello'
  }

  ngOnInit(): void {
    // if( !this.color && !this.htmlElement ) return;
    this.setStyleElement();
  }

  setStyleElement():void {

    if( !this.htmlElement ) return ;

    this.htmlElement!.nativeElement.style.color = this._color;

  }

  setErrorMessage():void{

    if ( !this.htmlElement ) return;

    if( !this._errors ){
      this.htmlElement!.nativeElement.innerText = '✅';
      return;
    }

    const errors:string[] = Object.keys( this._errors );

    if ( errors.includes('required') ){
      this.htmlElement!.nativeElement.innerText = 'This Field is required';
      this.htmlElement!.nativeElement.style.color = 'red';
      return;
    }

    if (errors.includes('minlength')) {
      const minValue = this._errors['minlength'].requiredLength - this._errors['minlength'].actualLength

      this.htmlElement!.nativeElement.innerText = `${ minValue } characters missing`;
      this.htmlElement!.nativeElement.style.color = 'red';
      return;
    }

    if( errors.includes( 'email' ) ){
      this.htmlElement!.nativeElement.innerText = `The ${ this._errors['email'].value } does not meet the necessary parameters`;
      this.htmlElement!.nativeElement.style.color = 'red';
      return
    }

  }
}
