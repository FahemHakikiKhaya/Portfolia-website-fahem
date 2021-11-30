import { combineReducers } from "redux";

import authReducer from "./authReducers";

export default combineReducers({
  // stateNasabah: Nasabah,
  // stateKeuangan: Keuangan,
  auth: authReducer,
  
});