import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

export const ResponseInterceptorFn: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  // const authService = inject(AuthenticationService);

  return next(req).pipe(
    map((event: HttpEvent<any>) => event),
    catchError((response: HttpErrorResponse) => {
      // if (response.status === 401 || response.status === 403) {
      //   authService.logout();
      // }
      return throwError(() => response.message);
      // console.log({response})
      // console.log(response.message)
      // if(response.status == 500){
      //   console.log({response})
      //   return throwError(() => response.message);
      // }
      // const error = response.error.errors || response.error.message;
      // let message = '';
      // if (typeof error === 'string') message = error;
      // else if (Array.isArray(error)) message = error.join(', ');
      // else if (typeof error === 'object') message = Object.values(error).join(', ');
      // console.log({message})
      // return throwError(() => message);
    })
  );
};
