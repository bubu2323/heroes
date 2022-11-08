import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()


  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  // sincrona:
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //assincrona con rjex
  //dal service richiama getHeroes() quindi lo assegna alla propieta heroes
  getHeroes(): void{

    this.heroService.getHeroes()//questo ritorna un'osservabile
      .subscribe(allHeroes => this.heroes = allHeroes);
    //i dati non sono disponibili fino al momento del subscribe;
  }
}
