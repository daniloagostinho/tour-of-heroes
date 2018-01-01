import { Injectable } from '@angular/core';
import { MOCKHEROES } from './mock-heroes';
import { Heroi } from './hero';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';



@Injectable()
export class HeroService {
  constructor(private messagemService: MessageService) { }


  getHerois(): Observable<Heroi[]> {
    this.messagemService.adicionar('Herois retornados com sucesso!');
    return of(MOCKHEROES);
  }

  getHero(id: number): Observable<Heroi> {
    this.messagemService.adicionar(`Herois retornados com sucesso id=${id}!!`);
    return of(MOCKHEROES.find(heroi => heroi.id === id));
  }
}
