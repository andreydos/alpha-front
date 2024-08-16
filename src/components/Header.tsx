'use client';

import { useUserSession } from "@/hooks/useUserSession"
import { signInWithGoogle, signOutWithGoogle } from "@/libs/firebase/auth"
import { createSession, removeSession } from "@/auth-actions"

interface IHeader {
	session?: any
}

export function Header({ session }: IHeader) {
	console.log('session Header component: ' + (session ? session.toString() : `null`));
	const userSessionId = useUserSession(session);

	const handleSignIn = async () => {
		const userUid = await signInWithGoogle();
		if (userUid) {
			await createSession(userUid);
		}
	};

	const handleSignOut = async () => {
		await signOutWithGoogle();
		await removeSession();
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
