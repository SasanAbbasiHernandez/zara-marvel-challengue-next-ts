import { createContext } from 'react';

import { DataStateInterface } from '../interfaces/contextInterfaces';
import { SimpleCharacter } from '@/interfaces/marvelAPICallsInterfaces';

export type AppContextProps = {
  dataState: DataStateInterface;
  addSearchCharacters: (characters: SimpleCharacter[]) => void;
  addFavoriteCharacters: (characters: SimpleCharacter) => void;
  deleteFavoriteCharacter: (characters: SimpleCharacter) => void;
  toggleCharacterTypePage: () => void;
  changeCharacterTypePage: (type: string) => void;
  deleteSearch: () => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
