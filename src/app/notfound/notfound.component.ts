import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls:[]
})
export class NotfoundComponent {
  constructor(private _router:Router){

  }

  goBack(){
    this._router.navigate(["/Login"]);
  }

}
