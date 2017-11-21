import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('AuthInterceptor intercept');

    let token = '';
    const localStorage = 'fitness-token';
    if (window.localStorage[localStorage]) {
      token = window.localStorage[localStorage];
    }

    console.log('Token: ' + token);

    const request = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    // Pass on the cloned request instead of the original request.
    // return next.handle(authReq);
    return next.handle(request);
  }
}
