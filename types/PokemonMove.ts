export interface PokemonMove {
  move: string;
  accuracy: number | null;
  power: number | null;
  type: {
    name: string;
    url: string;
  };
}
