import { SimpleCharacter } from '@/interfaces/marvelAPICallsInterfaces';
import { DataStateInterface } from '../interfaces/contextInterfaces';

type DataAction =
  | { type: 'addSearchCharacters'; payload: SimpleCharacter[] }
  | { type: 'addFavoriteCharacters'; payload: SimpleCharacter }
  | { type: 'deleteFavoriteCharacter'; payload: SimpleCharacter }
  | { type: 'changeCharacterTypePage'; payload: string }
  | { type: 'toggleCharacterTypePage' }
  | { type: 'deleteSearch' };

export const dataReducer = (
  state: DataStateInterface,
  action: DataAction
): DataStateInterface => {
  switch (action.type) {
    case 'addSearchCharacters':
      return {
        ...state,
        searchCharacters: action.payload,
      };

    case 'addFavoriteCharacters':
      return {
        ...state,
        favoritesCharacters: [...state.favoritesCharacters, action.payload],
      };

    case 'deleteFavoriteCharacter':
      const updatedFavorites = state.favoritesCharacters.filter(
        (character) => character.id !== action.payload.id
      );
      return {
        ...state,
        favoritesCharacters: updatedFavorites,
      };

    case 'toggleCharacterTypePage':
      return {
        ...state,
        characterTypePage:
          state.characterTypePage == 'search' ? 'favorites' : 'search',
      };

    case 'changeCharacterTypePage':
      return {
        ...state,
        characterTypePage: action.payload,
      };

    case 'deleteSearch':
      return {
        ...state,
        searchCharacters: [],
      };

    default:
      return state;
  }
};
