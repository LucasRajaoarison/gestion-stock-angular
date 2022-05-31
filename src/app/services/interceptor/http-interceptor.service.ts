import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserService} from "../user/user.service";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private userService: UserService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.getToken()) {
      const accessToken = this.getToken();
      let contentType = 'multipart/form-data';
      console.log("Le access est :" + accessToken) ;

      // clone the request and add new header with access token
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      if (request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', contentType) });
      }

      // send cloned request with header to the next handler.
      return next.handle(request);
    }

    return next.handle(request);

  }


  getToken() {
    let jwt: any;
    jwt =localStorage.getItem('token');
    return jwt;
  }

}
