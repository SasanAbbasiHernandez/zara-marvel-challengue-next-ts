'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CharacterComicList } from './CharacterComicList';

import { AnimatedLine } from '../styled-components/AnimatedLine';
import { AnimatedTopToBottom } from '../styled-components/AnimatedTopToBottom';

import { getMarvelCharacterById } from '@/api/MarvelAPICalls';

import { CharacterInfo } from '@/interfaces/marvelAPICallsInterfaces';
import { useData } from '@/hooks/useData';

import WhiteHeartIcon from '../../assets/white_heart_icon.png';
import RedHeartIcon from '../../assets/red_heart_icon.png';

import '../../styles/components/character/characterDescription.scss';

interface Props {
  id: string;
}

export const CharacterDescription = ({ id }: Props) => {
  const [character, setCharacter] = useState<CharacterInfo>();
  const [showAnimateLine, setShowAnimateLine] = useState(false);

  const {
    addFavoriteCharacters,
    deleteFavoriteCharacter,
    favoritesCharacters,
  } = useData();

  useEffect(() => {
    getCharacterInfo();
    setShowAnimateLine(true);

    const timeoutId = setTimeout(() => {
      setShowAnimateLine(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  const getCharacterInfo = async () => {
    const characterInfo = await getMarvelCharacterById(id);
    setCharacter(characterInfo);
  };

  const toogleFavoriteCharacter = () => {
    const idExist = checkIsFavorite();

    if (idExist && character) {
      deleteFavoriteCharacter({
        id: character?.id,
        name: character?.name,
        thumbnail: character?.thumbnail,
      });
    } else if (!idExist && character) {
      addFavoriteCharacters({
        id: character?.id,
        name: character?.name,
        thumbnail: character?.thumbnail,
      });
    }
  };

  const checkIsFavorite = () => {
    return favoritesCharacters.some(
      (favoritesCharacter) => favoritesCharacter.id === character?.id
    );
  };

  if (character) {
    return (
      <>
        {showAnimateLine && <AnimatedLine />}
        {!showAnimateLine && character && (
          <AnimatedTopToBottom>
            <section className='character-description-component'>
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                className='character-description-image'
                alt={`Character Photo`}
              />
              <div className='character-description-wrapper'>
                <div className='flex-space-between'>
                  <span className='character-description-name'>
                    {character.name}
                  </span>
                  <Image
                    src={checkIsFavorite() ? RedHeartIcon : WhiteHeartIcon}
                    width={24}
                    height={22}
                    alt={`Heart Icon`}
                    onClick={toogleFavoriteCharacter}
                  />
                </div>
                <span className='character-description-description'>
                  {character.description
                    ? character.description
                    : 'Dont have description'}
                </span>
              </div>
            </section>
            <CharacterComicList characterComics={character.comics} />
          </AnimatedTopToBottom>
        )}
      </>
    );
  }

  return <></>;
};
