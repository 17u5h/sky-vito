import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/authReducer";


export const store = configureStore({
	reducer: {
		login: authReducer,

	},
	middleware: [thunk],
})