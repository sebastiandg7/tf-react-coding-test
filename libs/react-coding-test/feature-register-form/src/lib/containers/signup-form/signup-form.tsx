import { LoadingSpinner, TextInput } from '@tf-test/react/ui';
import { stripCharacters } from '@tf-test/shared/util-formatters';
import {
  buildYupSchema,
  emailValidator,
  phoneValidator,
  usernameValidator
} from '@tf-test/shared/util-validators';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

const StyledSignupForm = styled.div`
  .lbl-input {
    display: table;
    margin: 0 auto;
  }

  .txt-input {
    margin: 5px auto 1.2em;

    &.error {
      border: 1px solid red;
    }
  }

  .input-feedback {
    margin-top: 0.5em;
    text-align: center;
    color: red;
  }

  .btn {
    display: block;
    background: #143055;
    color: #fff;
    padding: 0.6em 1.2em;
    min-width: 8.62em;
    text-align: center;
    border-radius: 5px;
    margin: 2.5em auto 0;

    &:disabled {
      background: gray;
    }
  }

  .btn.gray {
    background: #757575;
  }

  .loading-spinner {
    height: auto;
    margin: 2.5em auto 0;
  }
`;

/* eslint-disable-next-line */
export interface SignupFormProps {
  onSubmit: (values: SignupFormSchema) => void;
}

export interface SignupFormSchema {
  username: string;
  email: string;
  phone: string;
}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <StyledSignupForm>
      <Formik
        initialValues={{ username: '', email: '', phone: '' }}
        onSubmit={props.onSubmit}
        validationSchema={buildYupSchema({
          username: usernameValidator,
          email: emailValidator,
          phone: phoneValidator
        })}
      >
        {(props: FormikProps<SignupFormSchema>) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          } = props;

          return (
            <form className="signup-form" onSubmit={handleSubmit}>
              <label className="lbl-input" htmlFor="username">
                Username
              </label>
              <TextInput
                id="username"
                type="text"
                name="username"
                placeholder="anottakenusername"
                value={values.username}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                  event.currentTarget.value = event.currentTarget.value.toLowerCase();
                  handleChange(event);
                }}
                onBlur={handleBlur}
                className={`txt-input ${
                  errors.username && touched.username ? 'error' : ''
                }`}
              />
              {errors.username && touched.username && (
                <div className="input-feedback">{errors.username}</div>
              )}
              <label className="lbl-input" htmlFor="email">
                Email
              </label>
              <TextInput
                id="email"
                type="text"
                name="email"
                placeholder="yourname@example.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`txt-input ${
                  errors.email && touched.email ? 'error' : ''
                }`}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label className="lbl-input" htmlFor="phone">
                Phone Number
              </label>
              <InputMask
                id="phone"
                name="phone"
                type="text"
                mask="(999) 999 99 99"
                maskPlaceholder="_"
                placeholder="(315) 1234 56 78"
                value={values.phone}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                  event.currentTarget.value = stripCharacters(
                    event.currentTarget.value,
                    '() _'
                  );
                  handleChange(event);
                }}
                onBlur={handleBlur}
                className={`txt-input ${
                  errors.phone && touched.phone ? 'error' : ''
                }`}
              >
                <TextInput />
              </InputMask>
              {errors.phone && touched.phone && (
                <div className="input-feedback">{errors.phone}</div>
              )}
              {isSubmitting ? (
                <LoadingSpinner className="loading-spinner" />
              ) : (
                <button type="submit" className={`btn`} disabled={isSubmitting}>
                  Signup
                </button>
              )}
              {/* <DisplayFormikState {...props} /> */}
            </form>
          );
        }}
      </Formik>
    </StyledSignupForm>
  );
};

export default SignupForm;
