import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignasLayoutComponent } from './layout/signas-layout/signas-layout.component';

import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../shared/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    SignasLayoutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesPageComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,

    // Standalone
    SideMenuComponent
  ]
})
export class SignalsModule { }
