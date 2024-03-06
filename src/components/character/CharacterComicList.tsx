'use client';

import { useEffect, useState } from 'react';

import { getComicImageByResourceURI } from '@/api/MarvelAPICalls';

import { ComicImage } from '@/interfaces/comicImageInterface';
import { Comics } from '@/interfaces/marvelAPICallsInterfaces';

import '../../styles/components/character/characterComicList.scss';

interface Props {
  characterComics: Comics;
}

export const CharacterComicList = ({ characterComics }: Props) => {
  const [comicsData, setComicsData] = useState<ComicImage[]>([]);

  useEffect(() => {
    getAllComicData();
  }, []);

  const getAllComicData = async () => {
    const promises: Promise<ComicImage>[] = characterComics.items.map(
      async (comic) => {
        return getComicImageByResourceURI(comic.resourceURI);
      }
    );

    const resolvedComicsData: ComicImage[] = await Promise.all(promises);
    setComicsData(resolvedComicsData);
  };

  return (
    <section className='character-comic-list-section'>
      <span className='character-comic-list-section-title'>COMICS</span>
      <div className='scroll-container'>
        {comicsData.map((comic, index) => (
          <div key={index} className='comic-item'>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              width={179.2}
              height={268.8}
              alt={`Character Photo`}
            />
            <div className='comic-details'>
              <span className='comic-details-title'>{comic.title}</span>
              <span className='comic-details-year'>
                {comic.dates[0].date.substring(0, 4)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
