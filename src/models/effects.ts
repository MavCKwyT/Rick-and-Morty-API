import { createEffect } from 'effector';

export const loadCharactersFx = createEffect(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (response.ok) {
    return response.json();
  }

  throw await response.json();
});

export const loadCharacterByFiltersType = createEffect(async (filterType: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?${filterType}`, {

  });
});
