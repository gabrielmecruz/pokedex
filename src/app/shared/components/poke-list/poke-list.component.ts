import { Pokemon } from "../../interfaces/pokemon.interface";
import { PokeApiService } from './../../services/poke-api.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: Pokemon[] = [];
  public getAllPokemons: Pokemon[] = [];

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.listAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results!;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter(
      (res: Pokemon) => {
        console.log(res)
        return !res.name.indexOf(value.toLowerCase());
      });

    this.getAllPokemons = filter;
  }
}
