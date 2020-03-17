import React from 'react';

import styled from 'styled-components';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { getRegisterFormModule } from './store';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegisterFormProps {}

const StyledReactCodingTestFeatureRegisterForm = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureRegisterForm = (
  props: ReactCodingTestFeatureRegisterFormProps
) => {
  return (
    <DynamicModuleLoader modules={[getRegisterFormModule()]}>
      <StyledReactCodingTestFeatureRegisterForm>
        <h1>Welcome to react-coding-test-feature-register-form component!</h1>
      </StyledReactCodingTestFeatureRegisterForm>
    </DynamicModuleLoader>
  );
};

export default ReactCodingTestFeatureRegisterForm;
