import CharacterList from '@/components/characters/CharacterList';
import Searcher from '@/components/characters/Searcher';

import '../../../styles/views/charactersPage.scss';

export const metadata = {
  title: 'Characters',
  description: 'Characters',
};

export default function CharactersPage() {
  return (
    <div className='characters-page'>
      <Searcher />
      <CharacterList />
    </div>
  );
}
