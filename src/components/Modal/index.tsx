import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  closeModal: () => void,
  children: any,
}
export const Modal = ({
  closeModal,
  children,
}: IProps) => {
  const usePortal = () => {
    const rootModalElement = document.createElement('div'); // id - portal
    rootModalElement.setAttribute('id', 'portal');
    const rooModalElementRef = useRef(rootModalElement);
    useEffect(() => {
      document.body.appendChild(rooModalElementRef.current);

      return () => { // This function is run on unmount
        rooModalElementRef.current.remove();
      };
    });
    return rooModalElementRef.current;
  };
  const Children = () => (
    <div
      role="dialog"
      className="modal-root"
      aria-labelledby=""
      tabIndex={-1}
      style={{
        width: '500px',
        minWidth: '820px',
        height: '500px',
        backgroundColor: 'lightgray',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="modal-content" style={{ height: '100%', display: 'flex' }}>
        {children}
        <button
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
          }}
          type="button"
          onClick={closeModal}
        >
          Close
          <span />
        </button>
      </div>
    </div>
  );

  return createPortal(<Children />, usePortal());
};
