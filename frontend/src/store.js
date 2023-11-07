import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import roleReducer from "./Slice/roleSlice"

export const store = configureStore({
	reducer: {
		auth: authReducer,
      roles: roleReducer
	},
});
