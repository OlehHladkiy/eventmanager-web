import axios from 'axios';

import AppConfig from '@config/AppConfig';

import { UpdateMeData } from '../Actions';

const URL = `${AppConfig.apiUrl}/users`;

export const isEmailExists = (email: string, ...config: any) =>
  axios.get(`${URL}/${email}/exists`, ...config);

export const updateMe = (
  { id, data }: { id: string; data: UpdateMeData },
  ...config: any
) => axios.put(`${URL}/${id}`, data, ...config);
