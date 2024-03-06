import Link from 'next/link';
import Image from 'next/image';

import MarvelLogo from '../assets/header/marvel_logo.png';

import '../styles/views/notFoundPage.scss';

export default function NotFound() {
  return (
    <div className='not-found-page'>
      <Link href={`/views/characters`}>
        <Image
          src={MarvelLogo}
          width={390}
          height={156}
          alt={`Marvel Logo`}
          priority
        />
      </Link>
      <span className='not-found-error'>404</span>
      <span className='not-found-text'> This page could not be found.</span>
    </div>
  );
}
