import { IAuthForm, IAuthResponse } from '@/types/auth.types'

import { axiosClassic } from '@/api/interceptors'

// import { removeFromStorage, saveTokenStorage } from './auth-token.service'
import { removeAccessToken, removeRefreshToken, setAccessToken } from "@/auth-actions"

export enum EnumTokens {
	'ACCESS_TOKEN' = 'accessToken',
	'REFRESH_TOKEN' = 'refreshToken'
}

export const authService = {
	async loginWithFirebaseToken(tokenFromFirebase: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			'/auth/login/firebase',
			{idToken: tokenFromFirebase}
		)

		if (response.data.accessToken) {
			return response.data.accessToken;
		}

		return null
	},

	async getNewTokens () {
		// const response = await axiosClassic.get('/auth/new-tokens')
	},

	async logout() {
		// const response = await axiosClassic.post<boolean>('/auth/logout') //TODO: logout on server
		//
		// if (response.data) {
			await removeAccessToken()
			await removeRefreshToken()
		// }
	}
}
