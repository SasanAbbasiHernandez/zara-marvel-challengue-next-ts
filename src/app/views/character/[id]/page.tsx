import { CharacterDescription } from '../../../../components/character/CharacterDescription';

export const metadata = {
  title: 'Character',
  description: 'Character',
};

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  // Generating static views in prod time
  return [];
}

export default function CharacterPage({ params }: Props) {
  return (
    <div className='characters-page'>
      <CharacterDescription id={params.id} />
    </div>
  );
}
