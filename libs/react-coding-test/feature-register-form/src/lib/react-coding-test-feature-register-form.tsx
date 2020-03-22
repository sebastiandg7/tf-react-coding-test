import { doSignup, SignupError } from '@tf-test/shared/data-access-signup-api';
import React, { useState } from 'react';
import { Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import SignupForm, {
  SignupFormSchema
} from './containers/signup-form/signup-form';
import SignupSuccess from './components/signup-success/signup-success';

const StyledReactCodingTestFeatureRegisterForm = styled.div`
  .signup-error {
    color: red;
    text-align: center;
    margin-top: 0.5em;
  }
`;

interface MatchParams {
  name: string;
}

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps
  extends RouteComponentProps<MatchParams> {}

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  const { match } = props;

  const [signupError, setSignupError] = useState<SignupError>(null);

  const onSignup = async (values: SignupFormSchema) => {
    setSignupError(null);
    const { username, email, phone } = values;
    try {
      await doSignup({
        username,
        email,
        phone_number: Number(phone)
      });
    } catch (err) {
      setSignupError(err);
    }
  };

  return (
    <Switch>
      <Route
        path={`${match.path}/`}
        exact
        render={() => (
          <StyledReactCodingTestFeatureRegisterForm>
            <SignupForm onSubmit={onSignup} />
            {signupError ? (
              <p className="signup-error">{signupError.message}</p>
            ) : (
              ''
            )}
          </StyledReactCodingTestFeatureRegisterForm>
        )}
      />
      <Route path={`${match.path}/success`} component={SignupSuccess} />
      {/* END: routes */}
    </Switch>
  );
};

export default ReactCodingTestFeatureRegisterForm;
