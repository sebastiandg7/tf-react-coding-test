import React, { useState } from 'react';

import { ToggleSwitch } from '@tf-test/react/ui';

import styled from 'styled-components';
import FocusableInput from './components/focusable-input/focusable-input';

/* eslint-disable-next-line */
export interface ReactCodingTestFeatureInputComponentsProps {}

const StyledReactCodingTestFeatureInputComponents = styled.div`
  .settings,
  .input-controls,
  .result {
    margin: 3em 0;
  }

  .settings {
    display: flex;
  }

  .setttings-property-lbl {
    display: block;
    margin-bottom: 0.5em;
  }

  .input-controls {
    margin: 3em 0;
  }

  .lbl {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .btn {
    background: #143055;
    color: #fff;
    padding: 0.6em 1.2em;
    min-width: 8.62em;
    text-align: center;
    border-radius: 5px;
  }

  .btn.gray {
    background: #757575;
  }
`;

export const ReactCodingTestFeatureInputComponents = (
  props: ReactCodingTestFeatureInputComponentsProps
) => {
  const [inputRendered, setInputRendered] = useState(true);
  const [focused, setFocused] = useState(false);

  const onFocusedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(Boolean(event.target.checked));
  };

  return (
    <StyledReactCodingTestFeatureInputComponents>
      <div className="settings">
        <div className="settings-col">
          <div className="setttings-property">
            <label htmlFor="" className="lbl setttings-property-lbl">
              Set input focus
            </label>
            <div className="setttings-property-value">
              <ToggleSwitch
                rounded={true}
                value={focused}
                onChange={onFocusedChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="input-controls">
        <button
          className={`btn ${inputRendered ? 'gray' : ''}`}
          onClick={() => setInputRendered(!inputRendered)}
        >{`${inputRendered ? 'Remove' : 'Render'} input`}</button>
      </div>

      <div className="result">
        {inputRendered ? (
          <FocusableInput focused={focused} placeHolder="Focusable input" />
        ) : (
          <></>
        )}
      </div>
    </StyledReactCodingTestFeatureInputComponents>
  );
};

export default ReactCodingTestFeatureInputComponents;
