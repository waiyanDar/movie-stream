import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role : string = "b";
  let tempBool !: boolean;
  let errorCode !: string;
  let expectedRole = (route.data as RouteData).expectedRole;
  if (router.url.includes('home')){
    return true;
  }else if (role === 'admin' || role === expectedRole){
    tempBool = true;
  }else {
    errorCode = '401';
  }
  if (tempBool){
    return true;
  }else{
    const url = '/sorry?code='+errorCode;
    // router.navigate(['/sorry', errorCode]);
    router.navigateByUrl(url);
    return false;
  }
};

interface RouteData{
  expectedRole:string
}