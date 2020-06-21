import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3`;
    return this.http.get(url)
      .pipe(
        map(res => res),
        tap(data => console.log('response', data)));
  }
}
