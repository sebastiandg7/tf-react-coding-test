import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import SignupForm from './containers/signup-form/signup-form';
import { getRegisterFormModule } from './store';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  return (
    <DynamicModuleLoader modules={[getRegisterFormModule()]}>
      <SignupForm />
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureRegisterForm;
