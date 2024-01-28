import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersService } from '../../services/usersService.service';
import { User } from '../../interfaces/users-request.interface';

@Component({
  selector: 'signals-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  public userService = inject( UsersService );
  public userId = signal<number>( 1 );

  public currentUser = signal<User | undefined>( undefined );

  public userWasFound = signal<boolean>( true );

  public nameAndLastNameUser = computed<string | undefined>( () => {
    if( !this.currentUser() ) return undefined;
    return `${this.currentUser()!.first_name} ${ this.currentUser()!.last_name }`
  })

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  loadUser( id: number ):void{
    if( id <= 0 ) return;

    this.userId.set( id );
    this.currentUser.set( undefined );

    this.userService.getUserByid( id )
      .subscribe( {
        next: user => {
          this.currentUser.set(user); // Sobreescribe el valor anterior del signal.
          this.userWasFound.set( true );
        },
        error: ( e: Error ) =>{
          this.userWasFound.set( false );
          this.currentUser.set( undefined );
        }
      });
  }


}
