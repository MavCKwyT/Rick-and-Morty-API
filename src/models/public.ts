import { createEvent, createStore, combine } from 'effector';
import { ICharactersAPI } from 'api/types';
import { loadCharactersFx } from 'models/effects';

export const $characters = createStore<ICharactersAPI[]>([]);
export const $searchCharacters = createStore('');
export const searchChanged = createEvent<string>();

$characters.on(loadCharactersFx.doneData, (_, characters) => characters.results);
$searchCharacters.on(searchChanged, (_, search) => search);

export const $charactersForShow = combine($characters, $searchCharacters,
  (characters, searchCharacters) => characters.filter((character) => {
    return character.name.toLowerCase().includes(searchCharacters.toLowerCase());
  }));
