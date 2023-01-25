import {getUserFailure, getUserStarted, getUserSuccess} from "../actionCreators/getUser";
import $api from "../../http/interceptors";

export const fetchGetUser = () => async (dispatch) => {
	dispatch(getUserStarted())
	try{
		const user = await $api.get(`/user`)
		dispatch(getUserSuccess(user.data))
	}
	catch (error){
		dispatch(getUserFailure(error))
	}
}