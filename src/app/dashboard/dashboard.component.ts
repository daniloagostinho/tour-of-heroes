import { Component, OnInit } from '@angular/core';
import { Heroi } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  herois: Heroi[];

  constructor(
    public heroService: HeroService) { }

  ngOnInit() {
    this.getHerois();
  }

  getHerois(): void {
    this.heroService.getHerois()
    .subscribe(heroi => this.herois = heroi.slice(1, 9));
  }

}
