import { SimpleCharacter } from './marvelAPICallsInterfaces';

export interface DataStateInterface {
  searchCharacters: SimpleCharacter[];
  favoritesCharacters: SimpleCharacter[];
  characterTypePage: string;
}
