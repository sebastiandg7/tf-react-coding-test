import * as Yup from 'yup';

export const buildYupSchema = (fields: object) => Yup.object().shape(fields);

export const usernameValidator = Yup.string()
  .lowercase()
  .matches(/(^[a-zA-Z0-9_]+$)/, 'You must only use letters or numbers')
  .min(
    4,
    limit => `Your username must be at least ${limit.min} characters long`
  )
  .max(20, limit => `Your username must be up to ${limit.max} characters long`)
  .required('Your username is required');

export const emailValidator = Yup.string()
  .email('You must use a valid email address. Eg: yourname@example.com')
  .required('Your email address is required');

export const phoneValidator = Yup.string()
  .matches(/^(3[0-1]\d|320)/, 'Your phone number must start with 300 to 320')
  .matches(/(^[\d]{10}$)/, 'Your phone number must be 10 digist long')
  .required('Your phone number is required');
