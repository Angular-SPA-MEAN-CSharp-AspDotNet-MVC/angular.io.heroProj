import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetch heroes');
      return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // ToDo: send msg after fetching the hero
    this.messageService.add(`HeroService: fetched here id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}