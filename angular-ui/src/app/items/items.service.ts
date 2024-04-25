import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
     
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { CreateItemDto, Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private apiURL = "http://localhost:5178/api"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Item[]> {
  
    return this.httpClient.get<Item[]>(this.apiURL + '/items')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(item: CreateItemDto): Observable<Item> {
  
    return this.httpClient.post<Item>(this.apiURL + '/items/create', JSON.stringify(item), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
