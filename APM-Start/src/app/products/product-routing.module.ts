import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProductDetailGuard } from './product-detail.guard'
import { ProductListComponent } from './product-list.component'
import { ProductDetailsComponent } from './product-details.component'

const routes: Routes = [
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [ProductDetailGuard]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
