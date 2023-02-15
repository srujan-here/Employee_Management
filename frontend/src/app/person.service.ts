import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Person, User } from './person.model';
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url = 'http://localhost:3000/api/users/person/';
  constructor(private http: HttpClient) {}

  AddPerson(emp: Person) {
    return this.http.post(this.url, emp);
  }
  GetPersonList() {
    return this.http.get<Person[]>(this.url);
  }
  DeletePerson(id: string) {
    return this.http.delete(`${this.url}${id}`);
  }
  UpdatePerson(emp: User) {
    return this.http.put<Person>(`${this.url}${emp._id}`, emp);
  }
}
