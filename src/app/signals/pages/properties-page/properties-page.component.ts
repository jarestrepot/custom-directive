import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/users-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }`)

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
