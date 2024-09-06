import { useEffect, useState } from "react"

import { setAccessToken, setRefreshToken } from "@/auth-actions"
import { onAuthStateChanged, signOutFirebaseAuth } from "@/libs/firebase/auth"
import { authService } from "@/services/auth.service"
import { useAccountStore } from "@/stores/accountStore"

export function useUserSession(InitSession: string | null) {
	const [userUid, setUserUid] = useState<string | null>(InitSession)

	// Listen for changes to the user session
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(async (authUser: any) => {
			if (authUser) {
				try {
					const setFirebaseAccountData =
						useAccountStore.getState().setFirebaseAccountData
					setFirebaseAccountData(authUser)
					if (authUser.accessToken) {
						const details = await authService.loginWithFirebaseToken(
							authUser.accessToken
						)
						if (details?.accessToken) {
							setUserUid(details.accessToken)
							await setAccessToken(details.accessToken)
							await setRefreshToken(details.refreshToken)
						}
					}
				} catch (e) {
					console.log("signOutFirebaseAuth")
					await signOutFirebaseAuth()
				}
			} else if (InitSession === "fake_storybook_session") {
				setUserUid("Fake User")
			} else {
				setUserUid(null)
			}
		})

		return () => unsubscribe()
	}, [])

	return userUid
}
