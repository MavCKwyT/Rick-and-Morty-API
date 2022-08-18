import React from 'react';
import { Card } from 'components/Card';
import { mockData } from 'api/mock';
import * as s from './styles';

export const Main = () => (
  <main>
    <s.Section>
      {mockData.map((item) => (
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
          origin={item.origin.name}
          location={item.location.name}
        />
      ))}
    </s.Section>
  </main>
);
