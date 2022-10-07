import { createStore } from 'effector';
import { ICharactersAPI } from 'api/types';
import { loadCharactersFx } from 'models/effects';

export const $characters = createStore<ICharactersAPI[]>([]);
$characters.on(loadCharactersFx.doneData, (_, characters) => characters.results);
