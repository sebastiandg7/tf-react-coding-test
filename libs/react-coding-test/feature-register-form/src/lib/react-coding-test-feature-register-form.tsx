import React from 'react';
import SignupForm, {
  SignupFormSchema
} from './containers/signup-form/signup-form';
import { doSignup } from '@tf-test/shared/data-access-signup-api';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const onSignup = async (values: SignupFormSchema) => {
    const { username, email, phone } = values;
    try {
      await doSignup({
        username,
        email,
        phone_number: Number(phone)
      });
    } catch (err) {
      console.log('An error, I got it :)', err);
    }
  };

  return (
    <>
      <SignupForm onSubmit={onSignup} />
    </>
  );
};

export default ReactCodingTestFeatureRegisterForm;
