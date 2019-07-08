import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  joke$: Observable<string>;
  public joke:any;
  constructor(private jokes: JokesService) { }

  /* Método 1: Obtenemos JSON y nos subscribimos a él

  getRandom(){
    this.joke$ = this.jokes.getRandom$()
    /*     .subscribe((joke) => this.joke = joke);*/

    /* Método 2: Obtenemos el valor Joke del JSON y nos subscribimos con el pipe

    getRandom(){
      this.joke$ = this.jokes.getRandom$(); }
      */

     ngOnInit() {
       this.joke$ =
          fromEvent<MouseEvent>
          (document.getElementById('joke-btn'),
            'click').pipe(
            throttleTime(1000),
            switchMap(
              (e: MouseEvent) => this.jokes.getRandom$()
          ));
     }

}
