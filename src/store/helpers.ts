import { ActionSuffix } from './models';

export const getReduxAction = (type: string, payload?: Record<string, any>) =>
  payload
    ? { type: `${type}${ActionSuffix.Success}`, payload }
    : { type: `${type}${ActionSuffix.Success}` };
