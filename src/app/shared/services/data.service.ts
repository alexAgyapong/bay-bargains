import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = `${environment.browseBaseUrl}/item_summary/search?q=drone&limit=3`;
    return this.http.get(url)
      .pipe(
        map(res => res),
        tap(data => console.log('response', data)));
  }
}
