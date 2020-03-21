import React from 'react';
import SignupForm, {
  SignupFormSchema
} from './containers/signup-form/signup-form';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const onSignup = (values: SignupFormSchema) => {
    console.log('Form submitted :)', values);
  };

  return <SignupForm onSubmit={onSignup} />;
};

export default ReactCodingTestFeatureRegisterForm;
