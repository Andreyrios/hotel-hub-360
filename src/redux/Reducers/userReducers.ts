import { actionsName } from "../Actions/ActionsName";

const INITIAL_STATE = {
  user: {},
};

export default function userReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case actionsName.set_info_user: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    default:
      return state;
  }
}