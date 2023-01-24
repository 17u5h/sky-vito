import axios from "axios";


export const API_URL = 'http://localhost:8090'

const $api = axios.create({
	baseURL: API_URL
})

$api.interceptors.request.use((config) => {
	config.headers.common['Content-Type'] = 'application/json'
	config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
	return config
})

$api.interceptors.response.use((config) => {
	return config
}, async error => {
	const originalRequest = error.config
	if (error.response.status === 401 && error.config && !error.config.isRetry) {
		originalRequest.isRetry = true
		try {
			const response = await axios.put(`${API_URL}/auth/login/`, {
				"access_token": localStorage.getItem('accessToken'),
				"refresh_token": localStorage.getItem('refreshToken')
			})
			localStorage.setItem('accessToken', response.data.access_token)
			localStorage.setItem('refreshToken', response.data.refresh_token)
			return $api.request(originalRequest)
		} catch (e) {
			console.log('Пользователь не авторизован')
		}
	}
	throw error
})

export default $api