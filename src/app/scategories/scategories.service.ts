import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Scategorie } from './scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  private baseurl="http://localhost:3001/api/scategories/"

  constructor(private http:HttpClient) { }
  
  getallScategorie():Observable<Scategorie[]>{
    return this.http.get<Scategorie[]>(this.baseurl)

  }
  createScategorie(scat:Scategorie):Observable<Scategorie>{
     return this.http.post(this.baseurl,scat)
  }
  deleteScategorie(id:object){
    return this.http.delete(this.baseurl  + id)
  }
  getscategorie(id:object):Observable<Scategorie>{
    return this.http.get(this.baseurl + id)
  }
  updateScategorie(_id:object, scat:Scategorie): Observable<any> {
    return this.http.put(this.baseurl + _id,scat)
    
  }

}
