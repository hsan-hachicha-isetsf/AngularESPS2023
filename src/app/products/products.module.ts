import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    ViewComponent,
    CreateComponent,
    EditComponent,
    ListproduitsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
