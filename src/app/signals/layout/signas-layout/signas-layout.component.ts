import { Component } from '@angular/core';
import { MenuItem } from '../../interfaces/menuItem.interface';

@Component({
  templateUrl: './signas-layout.component.html',
  styleUrls: ['./signas-layout.component.css']
})
export class SignasLayoutComponent {

  public menuItems: MenuItem[] = [
    { title: 'Counter', route: 'counter' },
    { title: 'User infomation', route: 'user-info' },
    { title: 'Mutations', route: 'properties' },
  ]
}
