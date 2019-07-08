import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
export interface Joke{
  type: string,
  value: {
    id: number,
    joke: string,
    categories: string[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getRandom$() {
    return this.http.get<Joke>('http://api.icndb.com/jokes/random')
      .pipe(
        map((res)=> { return res.value.joke; })
      )

  }

}
