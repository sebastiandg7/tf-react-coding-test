import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

const StyledReactCodingTestFeatureRegisterForm = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  return (
    <StyledReactCodingTestFeatureRegisterForm>
      <h1>Welcome to react-coding-test-feature-register-form component!</h1>
    </StyledReactCodingTestFeatureRegisterForm>
  );
};

export default ReactCodingTestFeatureRegisterForm;
