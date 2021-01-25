const NAMESPACE = 'USER';

export const UPDATE_ME = `${NAMESPACE}/UPDATE_ME`;

export interface UpdateMeData {
  id: string;
  data: {
    email: string;
    name: string;
  };
}

export const updateMe = (payload: UpdateMeData) => ({
  type: UPDATE_ME,
  payload,
});
