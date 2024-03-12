import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/Hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService:HeroService, private messageService:MessageService) {}
  
  //lifecycle hooks
  ngOnInit(): void {
    this.getHeroes()
  }

  //variables
  heroes: Hero[] = []
  selectedHero?: Hero
  
  //methodes
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes()
    this.heroService
      .getHeroes()
      .subscribe(data => this.heroes = data)

  }
  onSelect(hero:Hero):void {
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero
  }
}
