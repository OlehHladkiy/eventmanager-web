import axios from 'axios';

import AppConfig from '@config/AppConfig';

import { SignInData, SignUpData } from '../AuthActions';

const URL = `${AppConfig.apiUrl}/auth`;

export const signIn = (data: SignInData, ...params: any) =>
  axios.post(`${URL}/signin`, data, ...params);

export const signUp = (data: SignUpData, ...params: any) =>
  axios.post(`${URL}/signup`, data, ...params);
