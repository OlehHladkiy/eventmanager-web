const NAMESPACE = 'APP_SETTINGS';

export const SET_IS_LOADING = `${NAMESPACE}/SET_IS_LOADING`;

export const setIsLoading = (payload: boolean) => ({
  type: SET_IS_LOADING,
  payload,
});
