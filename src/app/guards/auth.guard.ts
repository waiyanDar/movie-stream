import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role : string = "b";
  let tempBool !: boolean;
  let expectedRole = (route.data as RouteData).expectedRole;
  if (router.url.includes('home')){
    return true;
  }else if (role === 'admin' || role === expectedRole){
    tempBool = true;
  }
  if (tempBool){
    return true;
  }else{
    router.navigateByUrl('/test');
    return false;
  }
};

interface RouteData{
  expectedRole:string
}