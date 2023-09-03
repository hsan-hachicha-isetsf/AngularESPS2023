import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';
import { FormsModule } from '@angular/forms';

import { ProduitcardComponent } from './produitcard/produitcard.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
  
    ViewComponent,
    CreateComponent,
    EditComponent,
    ListproduitsComponent,
    ProduitcardComponent
   
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    DataTablesModule
  
   
  ]
})
export class ProductsModule { }
