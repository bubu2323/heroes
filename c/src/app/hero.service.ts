import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
//puo essere innietato in giro e tutti i componenti lo possono chiamare
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  //prende il dato nel momento in cui e' disponibile e lo ritorna
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  constructor() {}
}
