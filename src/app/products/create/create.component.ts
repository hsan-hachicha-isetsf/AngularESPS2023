import { Component} from '@angular/core';
import { Products } from '../products';
import { Scategorie } from 'src/app/scategories/scategorie';
import { ScategoriesService } from 'src/app/scategories/scategories.service';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  products:Products=new Products()
  scategories:Scategorie[]=[]
  display = "none";
 
constructor(private scatserv:ScategoriesService,private prserv:ProductsService){}

ngOnInit():void{
  this.scatserv.getallScategorie().subscribe((data:Scategorie[])=>
    this.scategories=data)
    
  }
 
  openModal() { 
    this.display = "block";
}

closeModal() {
 this.display = "none";
}
//Méthode pour Ajoputer un article
Ajoutarticle=()=>{
  this.prserv.createArticle(this.products).subscribe((data=>{
   
   this.closeModal() 
   window.location.reload();
  
  }))}



}
