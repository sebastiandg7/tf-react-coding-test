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
import './signup-form.styles.scss';

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
  );
};

export default SignupForm;
