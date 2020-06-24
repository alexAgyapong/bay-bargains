import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { query } from '@angular/animations';
import { RequestOption } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  searchItem(request?: RequestOption): Observable<any> {
    const options = new HttpParams({
      fromObject: {
        q: request?.query || '',
        limit: request?.limit.toString() || ''
      }
    });
    const url = `${environment.browseBaseUrl}/item_summary/search`;

    return this.http.get(url, { params: options })
      .pipe(
        map(res => res),
        tap(data => console.log('response', data)));
  }
}

