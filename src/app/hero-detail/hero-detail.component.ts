import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

import { Heroi } from './../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //recebendo do pai
  @Input() heroi: Heroi;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(heroi => this.heroi = heroi);
    console.log(id);
  }

  goBack(): void {
    this.location.back();
  }
}
