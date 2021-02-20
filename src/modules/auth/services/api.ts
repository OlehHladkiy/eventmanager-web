import axios from 'axios';

import AppConfig from '@config/AppConfig';

import { SignInData, SignUpData } from '../Actions';

const URL = `${AppConfig.apiUrl}/auth`;

export const signIn = (data: SignInData, ...config: any) =>
  axios.post(`${URL}/signin`, data, ...config);

export const signUp = (data: SignUpData, ...config: any) =>
  axios.post(`${URL}/signup`, data, ...config);
