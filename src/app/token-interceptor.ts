import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url && req.url.endsWith('oauth2/token')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${environment.appId}:${environment.clientSecret}`
        }
      });
      console.log('req ....', req)
    }
    return next.handle(req).pipe(tap(data => console.log('req', data)));
  }
}
