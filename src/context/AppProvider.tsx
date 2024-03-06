import { useReducer } from 'react';

import { AppContext } from './AppContext';
import { dataReducer } from './DataReducer';
import { INITIAL_STATE } from './InitialState';

import { SimpleCharacter } from '@/interfaces/marvelAPICallsInterfaces';

interface props {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

export const AppProvider = ({ children }: props) => {
  const [dataState, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  const addSearchCharacters = (characters: SimpleCharacter[]) => {
    dispatch({ type: 'addSearchCharacters', payload: characters });
  };

  const addFavoriteCharacters = (character: SimpleCharacter) => {
    dispatch({ type: 'addFavoriteCharacters', payload: character });
  };

  const deleteFavoriteCharacter = (character: SimpleCharacter) => {
    dispatch({ type: 'deleteFavoriteCharacter', payload: character });
  };

  const toggleCharacterTypePage = () => {
    dispatch({ type: 'toggleCharacterTypePage' });
  };

  const changeCharacterTypePage = (type: string) => {
    dispatch({ type: 'changeCharacterTypePage', payload: type });
  };

  const deleteSearch = () => {
    dispatch({ type: 'deleteSearch' });
  };

  return (
    <AppContext.Provider
      value={{
        dataState,
        addSearchCharacters,
        addFavoriteCharacters,
        deleteFavoriteCharacter,
        toggleCharacterTypePage,
        changeCharacterTypePage,
        deleteSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
