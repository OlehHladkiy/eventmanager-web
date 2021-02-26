import axios from 'axios';

import AppConfig from '@config/AppConfig';
import { getUrlWithParams } from '@common/helpers/api-helpers';

import { CreateUpdateEventData } from '../Actions';

const URL = `${AppConfig.apiUrl}/events`;

export const getEvent = (id: string, ...config: any) =>
  axios.get(`${URL}/${id}`, ...config);

export const getEvents = (params: Record<string, any>, ...config: any) =>
  axios.get(getUrlWithParams(URL, params), ...config);

export const createEvent = (data: CreateUpdateEventData, ...config: any) =>
  axios.post(`${URL}/`, data, ...config);

export const updateEvent = (
  { id, data }: { id: string; data: CreateUpdateEventData },
  ...config: any
) => axios.put(`${URL}/${id}`, data, ...config);
