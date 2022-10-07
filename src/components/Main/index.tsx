import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'components/Search';
import { Card } from 'components/Card';
import { loadCharactersFx } from 'models/effects';
import { $characters } from 'models/public';

export const Main = () => {
  const [search, setSearch] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    console.log('render');
    $characters.watch((store) => console.log('store', store));

    loadCharactersFx();
  }, []);

  return (
    <main>
      <h1 className="text-3xl">Text</h1>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        <Search
          charactersData={filteredNames}
          setSearch={setSearch}
          search={search}
          setFilteredNames={setFilteredNames}
        />
        {filteredNames.map((card: any) => (
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
