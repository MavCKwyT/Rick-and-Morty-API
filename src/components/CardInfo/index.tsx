import React from 'react';

interface IProps {
  cardInfo: unknown,
}
export const CardInfo = ({ cardInfo }: IProps) => (
  <>
    <div className="card-image" style={{ width: '100%', height: '100%' }}>
      <img alt={cardInfo.name} src={cardInfo.image} />
    </div>
    <div className="card-details" style={{ width: '100%', height: '100%' }}>
      <p>{`Name: ${cardInfo.name}`}</p>
      <p>{`Gender: ${cardInfo.gender}`}</p>
      <p>{`Species: ${cardInfo.species}`}</p>
      <p>{`Status: ${cardInfo.status}`}</p>
      <p>{`Location: ${cardInfo.location.name}`}</p>
    </div>
  </>
);
