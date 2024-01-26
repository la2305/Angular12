import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  constructor( private httpClient: HttpClient) { }

  public getTeachers(): Observable<any> {
    const url = `${this.REST_API_SERVER}/teacher`;
    return this.httpClient.get(url, this.httpOptions);
  }
  public postTeacher(payload: any): Observable<any>{
    const url = `${this.REST_API_SERVER}/teacher`;
    return this.httpClient.post(url,payload,this.httpOptions);
  }
}
