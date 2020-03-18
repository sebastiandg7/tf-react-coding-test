import { createStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';

export const rootStore = createStore({ extensions: [getThunkExtension()] });
