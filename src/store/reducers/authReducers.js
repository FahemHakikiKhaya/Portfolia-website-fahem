const init = {
  id: 0,
  username: "",
  role: "",
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        role: action.payload.role,
        permission: action.payload.permission,
      };
      break;
    case "LOGOUT_SUCCESS":
      return init;

    default:
      return state;
  }
};

export default authReducer;
