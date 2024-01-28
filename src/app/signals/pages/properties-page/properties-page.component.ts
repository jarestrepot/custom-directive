import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/users-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnInit, OnDestroy {

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public counter = signal<number>( 1 );

  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }`);

  // Solo se ejecuta cuando se monta el componente y cada vez que cambian sus dependencias.
  public userChangedEffect = effect( () => {
    console.log( `${ this.user().first_name } - ${ this.counter() }`)
  });

  ngOnInit(): void {
  }

  // Destruir el efecto manualmente.
  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }

  incriesBy( value:number = 1  ):void{
    this.counter.update( counter => counter + value )
  }


  // keyof User only keys for user interface
  onFiedlUpdated( field: keyof User , value: string ):void {

    // this.user.set( {
    //   ...this.user(),
    //   [field]: value
    // });

    // Actualizando
    // this.user.update( currentUser => ({
    //   ...currentUser,
    //   [field]: value
    // }));


    this.user.update( currentUser => {
      // Mutate
      switch( field ) {
        case 'email': {
          currentUser.email = value;
          break;
        }
        case 'first_name': {
          currentUser.first_name = value;
          break;
        }
        case 'last_name': {
          currentUser.last_name = value;
          break;
        }
        case 'avatar': {
          currentUser.avatar = value;
          break;
        }
        case 'id': {
          currentUser.id = Number( value );
          break;
        }
      }
      return currentUser
    })
  }
}
