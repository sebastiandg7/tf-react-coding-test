import React from 'react';
import SignupForm from './containers/signup-form/signup-form';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const onSignup = (values: FormData) => {
    console.log('Form submitted :)', values);
  };

  return <SignupForm />;
};

export default ReactCodingTestFeatureRegisterForm;
