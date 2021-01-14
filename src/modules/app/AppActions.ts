export const namespace = 'APP';
export const BOOTSTRAP = `${namespace}/BOOTSTRAP`;
export const AUTHENTICATED = `${namespace}/AUTHENTICATED`;

import { Action } from '@store/models';

export const appAuthenticated = (): Action => ({
  type: AUTHENTICATED,
});
