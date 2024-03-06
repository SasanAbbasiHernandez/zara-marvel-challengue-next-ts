'use client';

import { CharacterCard } from '@/components/characters/CharacterCard';

import { useData } from '@/hooks/useData';

import '../../styles/components/characters/characterList.scss';

const CharacterList = () => {
  const { searchCharacters, favoritesCharacters, characterTypePage } =
    useData();

  return (
    <section className='character-list-section'>
      {characterTypePage == 'search' &&
        searchCharacters.length > 0 &&
        searchCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}

      {characterTypePage == 'favorites' &&
        favoritesCharacters.length > 0 &&
        favoritesCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
    </section>
  );
};

export default CharacterList;
