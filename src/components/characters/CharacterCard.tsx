import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AnimatedHoverableComponent } from '../styled-components/AnimatedHoverableComponent ';
import { AnimatedOpacity } from '../styled-components/AnimatedOpacity';

import { useData } from '@/hooks/useData';

import { SimpleCharacter } from '@/interfaces/marvelAPICallsInterfaces';

import WhiteHeartIcon from '../../assets/white_heart_icon.png';
import WhiteFullHeartIcon from '../../assets/white_full_heart_icon.png';
import RedHeartIcon from '../../assets/red_heart_icon.png';

import '../../styles/components/characters/characterCard.scss';

interface Props {
  character: SimpleCharacter;
}

export const CharacterCard = ({ character }: Props) => {
  const [isHover, setIsHover] = useState(false);

  const {
    addFavoriteCharacters,
    deleteFavoriteCharacter,
    deleteSearch,
    favoritesCharacters,
  } = useData();

  const { thumbnail, name } = character;

  const toogleFavoriteCharacter = () => {
    const idExist = checkIsFavorite();

    if (idExist) {
      deleteFavoriteCharacter(character);
    } else {
      addFavoriteCharacters(character);
    }
  };

  const checkIsFavorite = () => {
    return favoritesCharacters.some(
      (favoritesCharacter) => favoritesCharacter.id === character.id
    );
  };

  return (
    <AnimatedOpacity className='card-character'>
      <Link href={`/views/character/${character.id}`} onClick={deleteSearch}>
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          className='card-character-image'
          width={188.57}
          height={189.97}
          alt={`Character Photo`}
        />
      </Link>
      <AnimatedHoverableComponent
        onClick={toogleFavoriteCharacter}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className='front'>{name}</span>
        <Image
          src={
            checkIsFavorite()
              ? isHover
                ? WhiteFullHeartIcon
                : RedHeartIcon
              : WhiteHeartIcon
          }
          width={12}
          height={11}
          alt={`Heart Icon`}
          className='front'
        />
      </AnimatedHoverableComponent>
    </AnimatedOpacity>
  );
};
