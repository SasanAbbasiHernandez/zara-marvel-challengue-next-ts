'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useData } from '@/hooks/useData';

import MarvelLogo from '../../assets/header/marvel_logo.png';
import RedHeartIcon from '../../assets/red_heart_icon.png';

import '../../styles/components/header.scss';

export const Header = () => {
  const { favoritesCharacters, changeCharacterTypePage } = useData();

  return (
    <header>
      <Link
        href={`/views/characters`}
        onClick={() => changeCharacterTypePage('search')}
      >
        <Image
          src={MarvelLogo}
          width={130}
          height={52}
          alt={`Marvel Logo`}
          priority
        />
      </Link>

      <Link
        href={`/views/characters`}
        className='header-favorites'
        onClick={() => changeCharacterTypePage('favorites')}
      >
        <Image src={RedHeartIcon} width={25} height={25} alt={`Favorites`} />
        <span>{favoritesCharacters.length}</span>
      </Link>
    </header>
  );
};
