import { createReducer } from '@reduxjs/toolkit';
import { getRegisterFormStart } from '../actions';

export const loadedReducer = createReducer(false, builder => {
  builder.addCase(getRegisterFormStart, (state: boolean, action) => {
    console.log(`It works... Loaded`);
  });
});
