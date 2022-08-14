import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../interfaces/animal';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  // replace to deployed portal
  // private url = "http://localhost:8080"
  private url = "https://e-shepherd-server.herokuapp.com"
  constructor(private httpClient: HttpClient) { }

  getAnimals(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(`${this.url}/animals`);
  }

  getName(): Observable<string> {
    return this.httpClient.get(`${this.url}/name`, { responseType: 'text' });
  }

  getNewName(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/newName`);
  }

  updateAnimals(animals: any) {
    return this.httpClient.post<any>(`${this.url}/animals`, animals, {'headers':{'content-type': 'application/json'}});
  }

  resetAnimals(): Observable<string> {
    return this.httpClient.get(`${this.url}/resetAnimals`, { responseType: 'text' });
  }
}
