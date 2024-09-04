import { useEffect, useState } from 'react';

import { onAuthStateChanged, signOutFirebaseAuth } from "@/libs/firebase/auth"
import { usePostStore } from "@/stores/postStore"
import { useAccountStore } from "@/stores/accountStore"
import { authService } from "@/services/auth.service"
import { setAccessToken } from "@/auth-actions"

export function useUserSession(InitSession: string | null) {
	const [userUid, setUserUid] = useState<string | null>(InitSession);

	// Listen for changes to the user session
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(async (authUser: any) => {
			if (authUser) {
				console.log('authUser')
				console.log(authUser)
				try {
					const setFirebaseAccountData = useAccountStore.getState().setFirebaseAccountData
					setFirebaseAccountData(authUser)
					if (authUser.accessToken) {
						const accessToken = await authService.loginWithFirebaseToken(authUser.accessToken)
						if (accessToken) {
							setUserUid(accessToken)
							await setAccessToken(accessToken)
						}
					}
				} catch (e) {
					console.log('signOutFirebaseAuth')
					await signOutFirebaseAuth();
				}
			} else if (InitSession === 'fake_storybook_session') {
				setUserUid('Fake User')
			} else {
				setUserUid(null)
			}
		});

		return () => unsubscribe()
	}, [])

	return userUid
}