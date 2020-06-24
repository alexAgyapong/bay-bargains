import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FindingService {

  constructor(private http: HttpClient) { }

  searchProductByKeywords(keywords?: string): Observable<any> {
    const options = new HttpParams({
      fromObject: {
        OPERATIONNAME: name,

        keywords
      }
    });
    // const url = `${environment.findBaseUrl}`;
    let url = 'http://svcs.ebay.com/services/search/FindingService/v1';
    url += '?OPERATION-NAME=findItemsByKeywords';
    url += '&SERVICE-VERSION=1.0.0';
    url += '&SECURITY-APPNAME=Alexande-BayBarga-PRD-9c8ee5576-caca9a9b';
    url += '&GLOBAL-ID=EBAY-US';
    url += '&RESPONSE-DATA-FORMAT=JSON';
    url += '&callback=_cb_findItemsByKeywords';
    url += '&REST-PAYLOAD';
    url += '&keywords=harry%20potter';
    url += '&paginationInput.entriesPerPage=3';
    return this.http.get(url).pipe(tap(data => console.log('res', data)));
  }

  histograms(): Observable<any> {
    let url = 'https://svcs.sandbox.ebay.com/services/search/FindingService/v1';
    url += '?X-EBAY-SOA-SECURITY-APPNAME=Alexande-BayBarga-SBX-1c8e8a00c-d31e69a0';
    // url += "&RESPONSE-DATA-FORMAT=JSON";
    url += '&X-EBAY-SOA-OPERATION-NAME:getHistograms';
    url += '&categoryId=112233';
    return this.http.get(url).pipe(tap(data => console.log('res', data)));
  }
}
