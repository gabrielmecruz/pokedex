import { Pokemon } from "./pokemon.interface";

export interface PokemonsEndpoint {
  count?: number;
  next?: string;
  previous?: any;
  results?: Pokemon[];
}
