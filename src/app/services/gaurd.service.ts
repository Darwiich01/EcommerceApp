import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { AuthService } from './auth.service';
import { resolve } from 'url';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GaurdService implements CanActivate
{

  constructor(private as : AuthService, private router : Router) { }
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;

  canActivate(path, route ) : boolean | Observable<boolean> | Promise<boolean>
  {
    return new Promise (resolve =>
      {
          this.as.user.subscribe( user => 
            {
              if(user) resolve(true)
              else 
              this.router.navigate(['/login'])
            })

      })
  }
  
}
