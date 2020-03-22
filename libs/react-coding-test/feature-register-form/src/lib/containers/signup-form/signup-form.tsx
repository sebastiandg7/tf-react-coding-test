import { LoadingSpinner, TextInput } from '@tf-test/react/ui';
import {
  buildYupSchema,
  emailValidator,
  usernameValidator,
  phoneValidator
} from '@tf-test/shared/util-validators';
import { Formik, FormikProps } from 'formik';
import React from 'react';
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
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
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
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? 'txt-input error'
                  : 'txt-input'
              }
            />
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}
            <label className="lbl-input" htmlFor="password">
              Password
            </label>
            <TextInput
              id="email"
              type="text"
              name="email"
              placeholder="yourname@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email ? 'txt-input error' : 'txt-input'
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label className="lbl-input" htmlFor="phone">
              Phone Number
            </label>
            <TextInput
              id="phone"
              name="phone"
              type="text"
              placeholder="(123) 456 78 90"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.phone && touched.phone ? 'txt-input error' : 'txt-input'
              }
            />
            {errors.phone && touched.phone && (
              <div className="input-feedback">{errors.phone}</div>
            )}

            <button type="submit" className={`btn`} disabled={isSubmitting}>
              Signup
            </button>
            <LoadingSpinner />

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>
  );
};

export default SignupForm;

export const DisplayFormikState = props => (
  <div style={{ margin: '1rem 0' }}>
    <h3 style={{ fontFamily: 'monospace' }} />
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem'
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);
