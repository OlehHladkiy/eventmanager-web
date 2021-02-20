const NAMESPACE = 'AUTH';

export const SIGN_IN = `${NAMESPACE}/SIGN_IN`;
export const SIGN_UP = `${NAMESPACE}/SIGN_UP`;
export const SIGN_OUT = `${NAMESPACE}/SIGN_OUT`;

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

export const signOut = () => ({
  type: SIGN_OUT,
});
