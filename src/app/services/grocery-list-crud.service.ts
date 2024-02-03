import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Grocery } from '../models/Grocery';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryListCrudService {
  private url = 'http://localhost:3000/get-quote';

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { }

  fetchAll(): Observable<Grocery[]> {
    console.log('fetchAll() service: ', this.url);
    return this.http.get<Grocery[]>(this.url, { responseType: "json"}).pipe(
      tap((_) => console.log('fetched groceries')),
      catchError(
        this.errorHandlerService.handleError<Grocery[]>('fetchAll', [])
      )
    );
  }

  post(item): Observable<any> {
    return this.http.post(this.url, item, this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>('post')
      )
    );
  }

  update(grocery: Grocery): Observable<any> {
    return this.http.put(this.url, grocery, this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>('put')
      )
    );
  }

  delete(id): Observable<any> {
    const url = `http://localhost:3000/get-quote/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(
        this.errorHandlerService.handleError<any>('delete')
      )
    );
  }



}
