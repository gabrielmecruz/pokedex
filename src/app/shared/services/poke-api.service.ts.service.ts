import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { PokemonsEndpoint } from "../interfaces/pokemon-endpoint.interface";
import { Pokemon } from "../interfaces/pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

  constructor(
    private http: HttpClient
  ) { }

  get listAllPokemons(): Observable<PokemonsEndpoint> {
    return this.http.get<PokemonsEndpoint>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results?.map((resPokemons: Pokemon) => {
          this.getPokemon(resPokemons.url).subscribe(res => resPokemons.status = res);
        })
      })
    )
  }

  public getPokemon(url: string): Observable<any> {
    return this.http.get(url).pipe(
      map(res => res)
    );
  }
}
