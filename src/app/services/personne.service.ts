import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Personne } from '../interfaces/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  // url: string = "http://localhost:5555/personnes/";
  private url: string;;

  constructor(private http: HttpClient) {
    const endPoint = environment.endPoint;
    this.url = `${endPoint}/personnes`;
  }

  getPersons() {
    return this.http.get<Array<Personne>>(this.url);
    // return this.personnes;
  }
  getPersonById(id: number) {
    return this.http.get<Personne>(`${this.url}/${id}`);
  }
  addPerson(p: Personne) {
    return this.http.post(this.url, p);
    // this.personnes.push(p);
  }
  removePerson(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    // this.personnes = this.personnes.filter(elt => elt.id != id);
  }
  updatePerson(p: Personne) {
    return this.http.put (`${this.url}/${p.id}`, p);
  }
}
