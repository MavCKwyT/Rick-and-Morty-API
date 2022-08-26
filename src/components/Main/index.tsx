import React from 'react';
import { Card } from 'components/Card';
import { gql, useQuery } from '@apollo/client';
import { Filters } from 'components/Filters';

export const Main = () => {
  const getCharacters = gql`
    query {
        characters {
            results {
                id
                name
                image
                status
                gender
                species
                type
            }
        }
    }
  `;

  const { data, loading } = useQuery(getCharacters);

  if (loading) {
    return '...loading';
  }

  if (!data) {
    return null;
  }

  /*
    * It's possible to filter Characters by name, status, species, type and gender.
    * The filters above can be applied all together.
   */

  return (
    <main>
      <Filters data={data.characters.results} />
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}>
        {/* {mockData.map((item) => { */}
        {data.characters.results.map((item) => (
          <Card
            cardId={item.id}
            key={item.id}
            imgAlt={item.name}
            imgUrl={item.image}
            figcaption={item.name}
            status={item.status}
            species={item.species}
            type={item.type}
            gender={item.gender}
          />
        ))}
      </section>
    </main>
  );
};
