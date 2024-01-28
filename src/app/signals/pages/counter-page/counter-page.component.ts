import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'signals-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);

  // ?? Señal de solo lectura, Función computada, Siempre estara observando la señal que están dentro del el
  public squareCounter = computed( () => this.counter() * this.counter() );

  increaseBy( value:number ):void {

    // this.counter.set( this.counter() + 1 );
    this.counter.update( current => current + value );

  }

}
