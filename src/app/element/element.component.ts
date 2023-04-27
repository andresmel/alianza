import { Component, OnInit } from '@angular/core';
import { DisneyService } from '../services/disney.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: []
})
export class ElementComponent implements OnInit {
  listOneCharacter:any;
  id:number=0;
  constructor(private _actRouter:ActivatedRoute,private  _serviceDisney:DisneyService,private _router:Router){}

  ngOnInit(): void {
    this.getId();
  }

  goBack(){
    this._router.navigate(["/Dashboard"]);
  }

  getId(){
    this._actRouter.params.subscribe(data=>{
       this.id=data["id"];
       this.getOneCharacter(this.id);
    })
  }

  getOneCharacter(id:number){
     this._serviceDisney.GetOneCharacter(id).subscribe((data:any)=>{
       this.listOneCharacter=data["data"];
       console.log(this.listOneCharacter);
     },(error)=>{
      console.log(error);
     })
  }

}
