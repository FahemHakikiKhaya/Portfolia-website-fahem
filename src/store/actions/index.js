export const loginAction = ({ id, username, role, permission,dispatch }) => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { id, username, role, permission },
    });
  };