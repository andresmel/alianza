import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import arr from "../../assets/json/servicesUrl.json";
@Injectable({
  providedIn: 'root'
})
export class DisneyService {
  baseUrl:string="";
  constructor(private _http:HttpClient) {
    this.baseUrl=arr.base.baseUrl;
  }

  GetAllCharacter(){
    return this._http.get(this.baseUrl+arr.endPoints.gettAll);
  }
}
