import React, { useEffect } from 'react';
import { Card } from 'components/Card';
import { loadCharactersFx } from 'models/effects';
import { $charactersForShow } from 'models/public';
import { useStore } from 'effector-react';

export const Main = () => {
  const characters = useStore($charactersForShow);

  useEffect(() => { loadCharactersFx(); }, []);

  return (
    <main>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        {characters.map((card) => (
          <Card
            key={card.id}
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
