import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './produc-page.component.html',
  styleUrls: ['./produc-page.component.css']
})
export class ProducPageComponent {

  // constructor( private fb: FormBuilder ){}
  private fb = inject( FormBuilder );

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ] ]
  });

  public color: string = 'red';

  changedColor(){
    this.color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }


}
