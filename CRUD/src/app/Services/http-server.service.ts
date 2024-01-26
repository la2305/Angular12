import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public getStudentList(): Observable<any> {
    const url = `http://localhost:3000/student`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public createStudent(payload: any): Observable<any> {
    const url = `http://localhost:3000/student`;
    return this.httpClient.post<any>(url,payload,this.httpOptions);
  }
}
