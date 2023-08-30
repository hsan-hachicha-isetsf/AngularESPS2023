import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent {
  produits:Products[]=[]
constructor(private prserv:ProductsService){}
ngOnInit():void{
this.prserv.getallArticles().subscribe((data:Products[])=>
  this.produits=data)
}
delarticle(id:any){
  this.prserv.deleteArticle(id).subscribe(res => {
    this.produits = this.produits.filter(item => item._id !== id);
})
}
}
