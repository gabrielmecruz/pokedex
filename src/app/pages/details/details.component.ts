import { PokemonName } from './../../shared/interfaces/pokemon-name.interface';
import { PokeApiService } from './../../shared/services/poke-api.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { forkJoin } from "rxjs";
import { Pokemon } from "src/app/shared/interfaces/pokemon.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlPokemonName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemonDetailed: any;
  public loading: boolean = false;
  public apiError: boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon() {
    const id = this.activateRoute.snapshot.params['id'];

    const pokemon = this.pokeApiService.getPokemon(`${this.urlPokemon}/${id}`);
    const name = this.pokeApiService.getPokemon(`${this.urlPokemonName}/${id}`)

    return forkJoin([pokemon, name]).subscribe(
      res => {
        this.pokemonDetailed = res;
        this.loading = true;
      },
      error => {
        this.apiError = true;
      }
    )
  }
}
