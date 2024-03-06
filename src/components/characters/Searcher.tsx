'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import { AnimatedTopToBottom } from '../styled-components/AnimatedTopToBottom';
import { AnimatedLine } from '../styled-components/AnimatedLine';

import useSearchInputState from '@/hooks/useSearchInputState';
import { useData } from '@/hooks/useData';

import { getMarvelCharacters } from '@/api/MarvelAPICalls';

import { SimpleCharacter } from '@/interfaces/marvelAPICallsInterfaces';

import SearchIcon from '../../assets/characters/search_icon.png';

import '../../styles/components/characters/searcher.scss';

const Searcher = () => {
  const [showAnimateLine, setShowAnimateLine] = useState(false);

  const {
    addSearchCharacters,
    searchCharacters,
    favoritesCharacters,
    characterTypePage,
  } = useData();

  const [searchValue, setSearchValue] = useSearchInputState(() => {
    if (searchValue == '') {
      searchAllCharacters();
    } else {
      searchByName(searchValue);
    }
  });

  useEffect(() => {
    setShowAnimateLine(true);
    searchAllCharacters();
  }, []);

  const searchAllCharacters = async () => {
    const characters: SimpleCharacter[] = await getMarvelCharacters(50);
    await addSearchCharacters(characters);
  };

  const searchByName = async (search: string) => {
    const characters: SimpleCharacter[] = await getMarvelCharacters(50, search);
    await addSearchCharacters(characters);
  };

  return (
    <>
      {showAnimateLine && <AnimatedLine />}
      {((characterTypePage == 'search' && searchCharacters.length != 0) ||
        characterTypePage == 'favorites') && (
        <section
          className={
            characterTypePage == 'search'
              ? 'search-section'
              : 'search-section fav-maxh'
          }
        >
          {characterTypePage == 'favorites' && (
            <AnimatedTopToBottom>
              <span className='favorite-title'>FAVORITES</span>
            </AnimatedTopToBottom>
          )}

          <label>
            <Image
              src={SearchIcon}
              width={12}
              height={12}
              alt={`Character Photo`}
            />
            <input
              type='text'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='SEARCH A CHARACTER...'
            />
          </label>
          <span>
            {characterTypePage == 'search'
              ? searchCharacters.length
              : favoritesCharacters.length}{' '}
            RESULTS
          </span>
        </section>
      )}
    </>
  );
};

export default Searcher;
