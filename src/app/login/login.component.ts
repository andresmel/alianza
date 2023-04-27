import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {

   constructor(private _router:Router){

   }

   goToDashboard(){
     this._router.navigate(["/Dashboard"]);
   }
   
}
