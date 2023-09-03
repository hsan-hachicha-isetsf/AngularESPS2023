import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
@Component({
  selector: 'app-produitcard',
  templateUrl: './produitcard.component.html',
  styleUrls: ['./produitcard.component.css']
})
export class ProduitcardComponent {
  produits:Products[]=[]
  constructor(private prserv:ProductsService){}
  ngOnInit():void{
    this.getproduits()
    }

    getproduits(){
      this.prserv.getallArticles().subscribe((data:Products[])=>
      this.produits=data)
    }
}
