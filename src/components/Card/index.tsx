import React, { useState } from 'react';
import { ActiveCardModal } from 'components/ActiveCardModal';

export interface IProps {
  cardId: number,
  imgUrl: string,
  figcaption: string,
  imgAlt: string,
}

export const Card = ({
  cardId,
  imgUrl,
  figcaption,
  imgAlt,
}: IProps) => {
  const [activeCard, setActiveCard] = useState('');

  return (
    <div>
      <figure onClick={() => setActiveCard(String(cardId))}>
        <a>
          <img
            alt={`${imgAlt}`}
            src={`${imgUrl}`}
          />
          <figcaption>{figcaption}</figcaption>
        </a>
      </figure>
      {activeCard && (<ActiveCardModal cardId={activeCard} closeModal={() => setActiveCard('')} />)}
    </div>
  );
};
