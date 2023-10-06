import { actionsName } from '../Actions/ActionsName';

interface User {
  id: number
  name: string
  lastName: string
}

interface SetInfoUserAction {
  type: typeof actionsName.set_info_user;
  payload: {
    user: User;
  };
}

type SetInfoUserFunction = (payload: {
  user: User;
}) => SetInfoUserAction;

export const setInfoUser: SetInfoUserFunction = (payload) => {
  return {
    type: actionsName.set_info_user,
    payload,
  };
};