import { DataStateInterface } from '../interfaces/contextInterfaces';

export const INITIAL_STATE: DataStateInterface = {
  searchCharacters: [],
  favoritesCharacters: [],
  characterTypePage: 'search', // Types: 'search' || 'favorites'
};
