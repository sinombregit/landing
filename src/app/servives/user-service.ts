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

  send(information:any) {      
    
    return this.http.post<{status:number}>('http://localhost:3000/api/contact', information)
    .pipe(
      map(x => x)
    )
  }
}
