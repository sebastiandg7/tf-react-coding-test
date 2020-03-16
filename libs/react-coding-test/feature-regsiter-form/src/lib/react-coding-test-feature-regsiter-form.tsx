import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureRegsiterFormProps {}

const StyledReactCodingTestFeatureRegsiterForm = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureRegsiterForm = (
  props: ReactCodingTestFeatureRegsiterFormProps
) => {
  return (
    <StyledReactCodingTestFeatureRegsiterForm>
      <h1>Welcome to react-coding-test-feature-regsiter-form component!</h1>
    </StyledReactCodingTestFeatureRegsiterForm>
  );
};

export default ReactCodingTestFeatureRegsiterForm;
