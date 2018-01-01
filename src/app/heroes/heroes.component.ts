import { Component, OnInit } from '@angular/core';

import { Heroi } from './../hero';
import { HeroService } from './../hero.service';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  herois: Heroi[];
  heroiSelecionado: Heroi;

  constructor(
    public heroService: HeroService,
    public mensagemService: MessageService) {
  }

  ngOnInit() {
    this.getHerois();

    console.log(this.mensagemService);
  }


  getHerois(): void {
    this.heroService.getHerois()
    .subscribe(heroi => this.herois = heroi);
  }

}
