import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getList(){
    return this.http.get(environment.url_api)
  }
  create(data:any):Observable<any>{
    return this.http.post(environment.url_api,data);
  }
  destroy(id:number):Observable<any>{
    return this.http.delete(environment.url_api+id);
  }
  edit(id:number,data:any){
    return this.http.put(environment.url_api+id,data)
  }
  getById(id:number){
    return this.http.get(environment.url_api+id)
  }
}
