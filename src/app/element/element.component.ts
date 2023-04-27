import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../services/disney.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: []
})
export class ElementComponent implements OnInit {
  listOneCharacter:any;
  id:number=0;
  constructor(private _actRouter:ActivatedRoute,private  _serviceDisney:DisneyService){}

  ngOnInit(): void {
    this.getId();
  }

  getId(){
    this._actRouter.params.subscribe(data=>{
       this.id=data["id"];
       this.getOneCharacter(this.id);
    })
  }

  getOneCharacter(id:number){
     this._serviceDisney.GetOneCharacter(id).subscribe((data)=>{
       this.listOneCharacter=data;
       console.log(data);
     },(error)=>{
      console.log(error);
     })
  }

}
