import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  public url = `http://localhost:3000/student`;

  constructor(private httpClient: HttpClient) { }

  public getStudentList(): Observable<any> {
    return this.httpClient.get<any>(this.url);
  }
  public deleteStudent(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.httpClient.delete(url);
  }
  public createStudent(student: any): Observable<any> {
    return this.httpClient.post<any>(this.url,student);
  }
  public getStudentById(id: number): Observable<any> {
    const url = `${this.url}/${id}`
    return this.httpClient.get<any>(url);
  }
  public editStudent(student: any): Observable<any> {
    const url = `${this.url}/${student.id}`;
    return this.httpClient.put<any>(url,student);
  }
}
