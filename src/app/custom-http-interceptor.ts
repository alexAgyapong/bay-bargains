import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // b64.StdEncoding.EncodeToString([]byte("YourCo-Proj-DDR-ab324" + ":" + "Foo-1234-effe"))
    const base64Credentials = `${environment.appId}:${environment.clientSecret}`;
    if (req.url && req.url.endsWith('oauth2/token')) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${environment.base64Credentails}`
        }
      });
      console.log('req ....', req);
    } else {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${environment.token}`
          // 'SECURITY-APPNAME': environment.appId,
          // 'RESPONSE-DATA-FORMAT': 'NV',
          // 'OPERATION-NAME': 'findItemsByKeywords',
          // 'GLOBAL-ID': 'EBAY-US'
          //  ' REST-PAYLOAD':'REST-PAYLOAD'
        }
      });
      console.log('req 2 ....', req);
    }

    return next.handle(req);
  }
}
