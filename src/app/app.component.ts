import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CatPhoto} from './models/cat-photo';
import {Joke} from './models/joke';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';

  joke$: Observable<Joke>;
  cats$: Observable<CatPhoto>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.joke$ = this.dataService.getJoke();
    this.cats$ = this.dataService.getCats();
  }
}
