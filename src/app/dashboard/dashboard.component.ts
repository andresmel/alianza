import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../services/disney.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: []
})
export class DashboardComponent implements OnInit {

  ListAllCharacters:any=[];
  ListArrayAll:any=[];
  ListFilter:any=[];
  validar:Boolean=false;
  constructor(private _ServiceDisney:DisneyService,private _router:Router){

  }

  ngOnInit(): void {
   this.GetAllcharacter();
  }

  caracter(ficha:any){
   this._router.navigate(["/Element",ficha._id])
  }

  search(x:any){
    if(x.target.value==""){
      this.ListAllCharacters=[...this.ListArrayAll];
    }
    else{
    console.log(x.target.value);
     this.ListFilter=[...this.ListArrayAll];
     this.ListFilter=this.ListAllCharacters.filter((e:any)=>{
      return e.name.includes(x.target.value);
     })
     this.ListAllCharacters=[...this.ListFilter];
    }

  }

  GetAllcharacter(){
    this.validar=true;
    this._ServiceDisney.GetAllCharacter().subscribe((data:any)=>{
       this.ListAllCharacters=data["data"];
       this.ListAllCharacters=this.ListAllCharacters.map((e:any) => {
        e.createdAt = e.createdAt.replaceAll("T", " ").split(".")[0];
        return e;
        })
        this.ListArrayAll=[...this.ListAllCharacters];
       setTimeout(()=>{
        this.validar=false;
       },2000);

       console.log(this.ListAllCharacters);
    },(error)=>{
      console.log(error);
      this.validar=false;
    })

  }
}
