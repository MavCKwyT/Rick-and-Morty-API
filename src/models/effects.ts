import { createEffect } from 'effector';

export const loadCharactersFx = createEffect(async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  console.log('response', response);

  return response.json();
});
