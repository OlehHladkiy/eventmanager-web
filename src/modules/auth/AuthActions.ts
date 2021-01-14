const namespace = 'AUTH';

export const SIGN_IN = `${namespace}/SIGN_IN`;
export const SIGN_UP = `${namespace}/SIGN_UP`;
export const SIGN_OUT = `${namespace}/SIGN_OUT`;

export interface SignInData {
  email: string;
  password: string;
}

export const signIn = (payload: SignInData) => ({
  type: SIGN_IN,
  payload,
});

export interface SignUpData {
  email: string;
  name: string;
  password: string;
}

export const signUp = (payload: SignUpData) => ({
  type: SIGN_UP,
  payload,
});
