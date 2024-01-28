import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducPageComponent } from './pages/produc-page/produc-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProducPageComponent },
      { path: '**', redirectTo:'product' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
