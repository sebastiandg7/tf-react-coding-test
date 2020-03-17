import { createReducer } from '@reduxjs/toolkit';
import { RegisterFormEntity } from '../register-form.module.contract';
import { getRegisterFormStart } from '../actions';

const initialState: RegisterFormEntity[] = [];

export const entitiesReducer = createReducer(initialState, builder => {
  builder.addCase(
    getRegisterFormStart,
    (state: RegisterFormEntity[], action) => {
      console.log(`It works... Name: ${action.payload.name}`);
    }
  );
});
