const init = {
    id: 0,
    username: "",
    role: "",
    berhasil: "Hore",
  };

const authReducer = (state = init , action ) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
          return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            role: action.payload.role,
          };
          break;
    
        default:
          return state;
      }
}