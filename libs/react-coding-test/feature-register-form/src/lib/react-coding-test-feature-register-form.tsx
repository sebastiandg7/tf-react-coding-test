import React from 'react';
import SignupForm, {
  SignupFormSchema
} from './containers/signup-form/signup-form';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const onSignup = async (values: SignupFormSchema) => {
    console.log('Form submitted :)', values);
    await new Promise(resolve => setTimeout(resolve, 2000));
  };

  return <SignupForm onSubmit={onSignup} />;
};

export default ReactCodingTestFeatureRegisterForm;
