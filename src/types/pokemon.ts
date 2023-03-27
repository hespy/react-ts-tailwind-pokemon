export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  species: {
    name: string;
    url: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
}
