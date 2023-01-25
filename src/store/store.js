import thunk from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./reducers/authReducer";
import {getUserReducer} from "./reducers/getUserReducer";


export const store = configureStore({
	reducer: {
		login: authReducer,
		getUser: getUserReducer,
	},
	middleware: [thunk],
})