import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = '';
  constructor(private http: HttpClient) { }
  public getStudents(): Observable<Student []>{
    return this.http.get<Student []>(`${this.apiServerUrl}/student/all`);
  }
  public addStudents(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.apiServerUrl}/student/add`, student);
  }
  public updateStudents(student: Student): Observable<Student>{
    return this.http.put<Student>(`${this.apiServerUrl}/student/update`, student);
  }
  public deleteStudents(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/student/delete/${studentId}`);
  }
}
