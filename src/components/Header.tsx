'use client';

import { useUserSession } from "@/hooks/useUserSession"
import { signInWithApple, signInWithGoogle, signOutWithGoogle } from "@/libs/firebase/auth"
import { authService } from "@/services/auth.service"
import { toast } from "sonner"

interface IHeader {
	session?: any
}

export function Header({ session }: IHeader) {
	const userSessionId = useUserSession(session);

	const handleSignIn = async () => {
		try {
			const userToken = await signInWithApple()
			// const userToken = await signInWithGoogle();
			// @ts-ignore
			if (userToken) {
				await authService.loginWithFirebaseToken(userToken)
			} else {
				toast.error('Виникла помилка при вході')
			}
		} catch (e) {
			console.log(e)
		}
	};

	const handleSignOut = async () => {
		await signOutWithGoogle();
		await authService.logout();
	};

	if (!userSessionId) {
		return (
			<header>
				<div>Logo</div>
				<div>Потрібно увійти в систему</div>
				<button onClick={handleSignIn}>Sign In</button>
			</header>
		);
	}

	return (
		<header className="bg-white p-8 shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2">
			<div>Logo</div>
			<div>Ви в системi</div>
			<button onClick={handleSignOut}>Sign Out</button>
		</header>
	)
}
