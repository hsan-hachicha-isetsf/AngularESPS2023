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


constructor(private prserv:ProductsService){

}
ajoutarticle=(pr:any)=>{
this.produits.push(pr)
}
ngOnInit(){
 this.loadarticles()


}
loadarticles=()=>{
  this.prserv.getallArticles().subscribe((data:Products[])=>
  this.produits=data)
}
delarticle(id:any){
  this.prserv.deleteArticle(id).subscribe(res => {
    this.produits = this.produits.filter(item => item._id !== id);
})
window.location.reload();
}
}
