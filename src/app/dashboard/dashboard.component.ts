import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../services/disney.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  ListAllCharacters:any=[];
  validar:Boolean=false;
  constructor(private _http:HttpClient,private _ServiceDisney:DisneyService){

  }

  ngOnInit(): void {
   this.GetAllcharacter();
  }

  GetAllcharacter(){
    this.validar=true;
    this._ServiceDisney.GetAllCharacter().subscribe((data:any)=>{
       this.ListAllCharacters=data["data"];
       this.ListAllCharacters=this.ListAllCharacters.map((e:any) => {
        e.createdAt = e.createdAt.replaceAll("T", " ").split(".")[0];
        return e;
        })
       setTimeout(()=>{
        this.validar=false;
       },2000);

       console.log(this.ListAllCharacters);
    },(error)=>{
      console.log(error);
    })

  }
}
