import React from 'react';
import { charactersFilterTypes } from 'components/Filters/constatns';

interface IProps { filterKey: any, filterItem: any }

export const FilterItems = ({ filterKey, filterItem }: IProps) => {
  return (
    <>
      {charactersFilterTypes[filterKey][filterItem]?.map((element: any) => (
        <li>
          <input type="checkbox" id={element} />
          <label htmlFor={element}>{element}</label>
        </li>
      ))}
    </>
  );
};
