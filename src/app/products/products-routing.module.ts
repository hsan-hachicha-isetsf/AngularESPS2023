import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';



const routes: Routes = [
  { path: 'products', redirectTo: 'products/listpr', pathMatch: 'full'},
  { path: 'products/listpr', component: ListproduitsComponent },
  { path: 'products/:productId/view', component: ViewComponent },
  { path: 'products/create', component: CreateComponent },
  { path: 'products/:productId/edit', component: EditComponent } 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
