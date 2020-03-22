import axios, { AxiosRequestConfig } from 'axios';
import * as qs from 'qs';

export interface SignupParams {
  username: string;
  email: string;
  phone_number: number;
}

export interface SignupResponse {
  status: boolean;
  error: string;
}

export enum SignupErrorType {
  FAILED_REQUEST,
  DATA_ERROR
}
export interface SignupError {
  type: SignupErrorType;
  message: string;
}

const apiClientConfig: AxiosRequestConfig = {
  baseURL: 'http://sgaviria.com',
  responseType: 'json',
  headers: {
    'Tranqui-FrontendDeveloper': 'sebastianDuqueGutierrez',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

export const doSignup = async (
  signupParams: SignupParams
): Promise<SignupResponse> => {
  const signupClient = axios.create(apiClientConfig);

  // Convert signup responses to standard errors
  signupClient.interceptors.response.use(
    response => {
      const { status, error: errorMessage } = response.data;
      if (!status) {
        const error: SignupError = {
          type: SignupErrorType.DATA_ERROR,
          message: errorMessage
        };
        return Promise.reject(error);
      }
      return response;
    },
    errorResponse => {
      const error: SignupError = {
        type: SignupErrorType.FAILED_REQUEST,
        message: `We are having some troubles with our service right now, please try again later.`
      };
      return Promise.reject(error);
    }
  );

  return signupClient.post('/api/1/front-dev/', qs.stringify(signupParams));
};
