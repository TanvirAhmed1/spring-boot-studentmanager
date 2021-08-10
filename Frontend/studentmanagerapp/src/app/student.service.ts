import {root} from "rxjs/internal-compatibility";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "./student";

@injectable({
    providedIn : root
  })
export class StudentService {
  private apiServerUrl = '';

  constructor(private http: HttpClient) {}

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiServerUrl}/student/all`);
  }
}
