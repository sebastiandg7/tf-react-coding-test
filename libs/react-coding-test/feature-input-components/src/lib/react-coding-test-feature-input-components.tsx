import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureInputComponentsProps {}

const StyledReactCodingTestFeatureInputComponents = styled.div`
  color: pink;
`;

export const ReactCodingTestFeatureInputComponents = (
  props: ReactCodingTestFeatureInputComponentsProps
) => {
  return (
    <StyledReactCodingTestFeatureInputComponents>
      <h1>Welcome to react-coding-test-feature-input-components component!</h1>
    </StyledReactCodingTestFeatureInputComponents>
  );
};

export default ReactCodingTestFeatureInputComponents;
