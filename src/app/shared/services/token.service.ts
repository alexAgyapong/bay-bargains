import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private http: HttpClient) { }

  getToken() {
    // const scopeList = `https://api.ebay.com/oauth/api_scope`;
    const scopeList = `
    https://api.ebay.com/oauth/api_scope
    https://api.ebay.com/oauth/api_scope/buy.guest.order
    https://api.ebay.com/oauth/api_scope/buy.item.feed
    https://api.ebay.com/oauth/api_scope/buy.marketing
    https://api.ebay.com/oauth/api_scope/buy.product.feed
    https://api.ebay.com/oauth/api_scope/buy.marketplace.insights
    https://api.ebay.com/oauth/api_scope/buy.proxy.guest.order
    ` ;
    const payload = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('scopes', encodeURIComponent(scopeList));
    const url = `${environment.tokenBaseUrl}`;
    return this.http.post<TokenResult>(url, payload)
      .pipe(map(res => localStorage.setItem('accessToken', res.access_token)));
  }
}

export interface TokenResult {
  access_token: string;
  expires_in: number;
  token_type: string;
}
