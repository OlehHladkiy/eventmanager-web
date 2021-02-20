const NAMESPACE = 'APP';

export const BOOTSTRAP = `${NAMESPACE}/BOOTSTRAP`;
export const AUTHENTICATED = `${NAMESPACE}/AUTHENTICATED`;

import { Action } from '@store/models';

export const appAuthenticated = (): Action => ({
  type: AUTHENTICATED,
});
