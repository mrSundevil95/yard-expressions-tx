import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:4200/api/tutorials'

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor(
    private http: HttpClient
  ) { }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

}
