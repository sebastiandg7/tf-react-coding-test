import { LoadingSpinner, TextInput } from '@tf-test/react/ui';
import { Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import './signup-form.styles.scss';

/* eslint-disable-next-line */
export interface SignupFormProps {
  onSubmit: (values: SignupFormSchema) => void;
}

export interface SignupFormSchema {
  username: string;
  password: string;
  phone: number;
}

export const SignupForm = (props: SignupFormProps) => {
  return (
    <Formik
      initialValues={{ username: '', password: '', phone: 0 }}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Required')
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
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.password && touched.password
                  ? 'txt-input error'
                  : 'txt-input'
              }
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <label className="lbl-input" htmlFor="phone">
              Phone Number
            </label>
            <TextInput
              id="phone"
              name="phone"
              type="number"
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
