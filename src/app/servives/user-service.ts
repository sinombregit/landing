import { HttpClient, HttpParams, HttpParameterCodec } from '@angular/common/http'
import { Injectable, inject } from '@angular/core';
import { Observable, interval, throwError} from 'rxjs'
import { retry, take, map, filter, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  search() {
    
    return this.http.get(''); 
  }

  send(url:string, information:any) {      
    
    return this.http.post<{status:number}>(url, information)
    .pipe(
      map(x => x)
    )
  }
}
