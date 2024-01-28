import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'src/app/signals/interfaces/menuItem.interface';

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {


  @Input()
  public menuItems: MenuItem[] = [];

  public menuItemSignal = signal<MenuItem[]>( [] );

  ngOnInit(): void {
    if( this.menuItems.length === 0 ) return;

    this.menuItemSignal.set( this.menuItems );
  }

}
