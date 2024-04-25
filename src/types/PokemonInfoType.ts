import { PokemonType } from '.';

interface PokemonTypeObj {
  type: {
    name: PokemonType;
  };
}

export interface PokemonInfoType {
  data: {
    name: string;
    image: string;
    number: number;
    types: PokemonTypeObj[];
    flavorText: string;
    genera: string;
  };
}
