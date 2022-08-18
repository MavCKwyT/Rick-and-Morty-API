import React from 'react';
import { mockData } from 'api/mock';
import { Modal } from 'components/Modal';
import { CardInfo } from 'components/CardInfo';

interface IProps {
  cardId: any,
  closeModal: () => void
}
export const ActiveCardModal = ({
  cardId,
  closeModal,
}: IProps) => {
  const cardInfo = mockData.find((data) => Number(cardId) === data.id);
  console.log('cardInfo', cardInfo);
  const isLoading = false;

  return (
    <Modal closeModal={closeModal}>
      {isLoading ? <div>SkeletonLoader</div> : <CardInfo cardInfo={cardInfo} /> }
    </Modal>
  );
};
