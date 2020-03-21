import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import SignupForm, {
  SignupFormProps
} from './containers/signup-form/signup-form';
import { getRegisterFormModule } from './store';
import { Dispatch } from '@reduxjs/toolkit';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const onSignup = (values: FormData) => {
    console.log('Form submitted :)', values);
  };

  return (
    <DynamicModuleLoader modules={[getRegisterFormModule()]}>
      <SignupForm onSubmit={onSignup} />
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureRegisterForm;
