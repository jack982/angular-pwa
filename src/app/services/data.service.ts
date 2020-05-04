import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Joke} from '../models/joke';
import {CatPhoto} from '../models/cat-photo';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getJoke() {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.httpClient.get<Joke>('https://icanhazdadjoke.com', { headers });
  }

  getCats() {
    return this.httpClient.get<CatPhoto>('https://aws.random.cat/meow');
  }


}
