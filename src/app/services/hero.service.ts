import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/Hero';
import { Heroes } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add("Hero Service: fetched heroes")
    return of(Heroes)
  }

  getHero(id: number):Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }
}
