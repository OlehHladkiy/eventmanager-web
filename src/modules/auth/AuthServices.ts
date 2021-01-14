import axios from 'axios';

import AppConfig from '@config/AppConfig';

import { SignInData, SignUpData } from './AuthActions';

export const signIn = (data: SignInData, ...params: any) =>
  axios.post(`${AppConfig.apiUrl}/users/signin`, data, ...params);

export const signUp = (data: SignUpData, ...params: any) =>
  axios.post(`${AppConfig.apiUrl}/users/signup`, data, ...params);

export const isEmailExists = (email: string, ...params: any) =>
  axios.get(`${AppConfig.apiUrl}/users/${email}/exists`, ...params);
