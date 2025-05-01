// app/types/PokemonDetail.ts

export interface Evolution {
    id: string;
    name: string;
    types: string[];
    image_url: string;
    evolution_conditions: EvolutionCondition[];
    from_pokemon_id: string | null;
  }
  
  export interface EvolutionCondition {
    trigger: string;
    min_level: number;
    item: string | null;
    time_of_day: string;
    location: string | null;
    happiness: number | null;
    beauty: number | null;
    held_item: string | null;
    known_move: string | null;
    known_move_type: string | null;
  }
  
  export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  }
  
  export interface PokemonDetail {
    id: number;
    name: string;
    types: string[];
    image_url: string;
    height: number;
    weight: number;
    species: string;
    description: string;
    evolution_chain: Evolution[];
    abilities: string[];
    stats: Stats;
  }
  