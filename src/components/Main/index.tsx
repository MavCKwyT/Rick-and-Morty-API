import React, { useEffect } from 'react';
import { Search } from 'components/Search';
import { Card } from 'components/Card';
import { loadCharactersFx } from 'models/effects';
import { $charactersForShow } from 'models/public';
import { useStore } from 'effector-react';

export const Main = () => {
  const characters = useStore($charactersForShow);

  useEffect(() => {
    loadCharactersFx();

    $charactersForShow.watch((store) => console.log('$charactersForShow', store));
  }, []);

  return (
    <main>
      <h1 className="text-3xl">Text</h1>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        <Search />
        {characters.map((card: any) => (
          <Card
            cardId={card.id}
            imgUrl={card.image}
            figcaption={card.name}
            imgAlt={card.name}
          />
        ))}
      </section>
    </main>
  );
};
