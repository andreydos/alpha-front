import { authService } from '@/services/auth.service'
import axios, { type CreateAxiosDefaults } from 'axios'

import { errorCatch } from './error'
import { removeAccessToken, removeRefreshToken, getAccessToken } from "@/auth-actions"

const serviceOptions: CreateAxiosDefaults = {
	baseURL: process.env.API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const options: CreateAxiosDefaults = {
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

const axiosClassicServer = axios.create(serviceOptions)
const axiosClassic = axios.create(options)
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use(async (config) => {
	const accessToken = await getAccessToken()

	if (config?.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosWithAuth.interceptors.response.use(
	config => {
		return config
	},
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await authService.getNewTokens()
				return axiosWithAuth.request(originalRequest)
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					await removeAccessToken()
					await removeRefreshToken()
				}
			}
		}

		throw error
	}
)

export { axiosClassic, axiosWithAuth, axiosClassicServer }
