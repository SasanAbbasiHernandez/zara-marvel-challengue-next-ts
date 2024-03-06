const crypto = require('crypto');

import {
  ComicImage,
  ComicImageResponse,
} from '@/interfaces/comicImageInterface';
import {
  CharacterInfo,
  MarvelCharacterInfoResponse,
  MarvelCharactersResponse,
  SimpleCharacter,
} from '@/interfaces/marvelAPICallsInterfaces';

// const publicKey = '101a981c8a069968a573f008b22d7165'; // second usr mail
// const privateKey = 'a76d6e21f7bcbf54d9dd773e9e4b8998959cda64'; // second usr mail
const publicKey = '43a3f1ea56310e368f91a87c4fd5f07d';
const privateKey = '5d153bccff6b71ec03eb4abd887b88a1e488bd8b';
const url = 'https://gateway.marvel.com:443';
const timestamp = new Date().getTime().toString();
const hash = crypto
  .createHash('md5')
  .update(timestamp + privateKey + publicKey)
  .digest('hex');

export const getMarvelCharacters = async (
  limit: number = 50,
  nameStartsWith: string | undefined = undefined
): Promise<SimpleCharacter[]> => {
  const res: MarvelCharactersResponse = await fetch(
    `${url}/v1/public/characters?${
      nameStartsWith ? `nameStartsWith=${nameStartsWith}` : ''
    }&limit=${limit}&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
  ).then((res) => res.json());

  const characters = res.data.results.map((character) => ({
    id: character.id,
    name: character.name,
    thumbnail: character.thumbnail,
  }));

  return characters;
};

export const getMarvelCharacterById = async (
  id: string
): Promise<CharacterInfo> => {
  const res: MarvelCharacterInfoResponse = await fetch(
    `${url}/v1/public/characters/${id}?&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`,
    {
      next: {
        revalidate: 60 * 60 * 30,
      },
    }
  ).then((res) => res.json());

  const characterInfo = res.data.results[0];

  const newCharacterInfo = {
    id: characterInfo.id,
    name: characterInfo.name,
    description: characterInfo.description,
    thumbnail: characterInfo.thumbnail,
    comics: characterInfo.comics,
  };

  return newCharacterInfo;
};

export const getComicImageByResourceURI = async (
  resourceURI: string
): Promise<ComicImage> => {
  const res: ComicImageResponse = await fetch(
    `${resourceURI}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`,
    {
      next: {
        revalidate: 60 * 60 * 30,
      },
    }
  ).then((res) => res.json());

  const image = res.data.results[0];

  const newCharacterInfo = {
    thumbnail: image.thumbnail,
    title: image.title,
    dates: image.dates,
  };

  return newCharacterInfo;
};
