import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { repos } from './repos';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    baseURL: string = "http://localhost:5000/";

    constructor(private http: HttpClient) { }
    getMessage() : Observable<any> {
        return this.http.get(
            'http://localhost:5000/getproduct');
    }

    deleteMessage(productId: string): Observable<any> {
        return this.http.get(this.baseURL + `/deleteproduct/${productId}`)
      }
}