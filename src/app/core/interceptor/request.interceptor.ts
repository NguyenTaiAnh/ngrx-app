import {
  HttpEvent,
  HttpHandler,
  HttpHandlerFn,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { TokenService } from '../services/token.service';

export const RequestInterceptorFn: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  // const authService = inject(TokenService);

  const newRequest = request.clone({
    // setHeaders: {
    //   Authorization: `Bearer ${authService.getAccessToken()}`,
    // },
  });

  return next(newRequest);
};
