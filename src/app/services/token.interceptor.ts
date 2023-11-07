import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = JSON.parse( localStorage.getItem( 'access_token' ) || JSON.stringify('') );
      const request = req.clone( {
        headers: req.headers
          .set( 'Authorization', `Bearer ${token}` )
      } );

      return next.handle( request );

  }
}
