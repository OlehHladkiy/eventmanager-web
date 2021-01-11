const namespace = 'AUTH';

export const SIGN_IN = `${namespace}/SIGN_IN`;
export const SIGN_UP = `${namespace}/SIGN_UP`;
export const SIGN_OUT = `${namespace}/SIGN_OUT`;

type SigninData = {
  email: string;
  password: string;
};

export const signIn = (payload: SigninData) => ({
  type: SIGN_IN,
  payload,
});

type SignupData = {
  email: string;
  name: string;
  password: string;
};

export const signUp = (payload: SignupData) => ({
  type: SIGN_UP,
  payload,
});
