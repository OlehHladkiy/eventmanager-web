import axios from 'axios';

import AppConfig from '@config/AppConfig';

import { UpdateMeData } from '../UserActions';

const URL = `${AppConfig.apiUrl}/users`;

export const isEmailExists = (email: string, ...params: any) =>
  axios.get(`${URL}/${email}/exists`, ...params);

export const updateMe = (id: string, data: UpdateMeData, ...params: any) =>
  axios.put(`${URL}/${id}`, data, ...params);
