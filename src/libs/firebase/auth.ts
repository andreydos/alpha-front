import {
	type User,
	getAuth,
	OAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged as _onAuthStateChanged,
} from 'firebase/auth';

import { firebaseAuth } from './config';
import { GoogleUser } from "@/types/auth.types"
import { toast } from "sonner"

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
	return _onAuthStateChanged(firebaseAuth, callback);
}

export async function signInWithApple() {
	const provider = new OAuthProvider('apple.com');
	const auth = getAuth();
	try {
		const result = await signInWithPopup(auth, provider)
		const user = result.user;

		// Apple credential
		// const credential = OAuthProvider.credentialFromResult(result);
		// const accessToken = credential?.accessToken;
		// const idToken = credential?.idToken;

		//@ts-ignore
		return user?.accessToken; //TODO: think and check docs
	} catch (error: any) {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.customData.email;

		// The credential that was used.
		const credential = OAuthProvider.credentialFromError(error);
		if (errorCode.includes('popup-closed-by-user')) {
			toast('Вхід було відхилено')
		} else {
			debugger
		}
		throw error;
	}
}

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(firebaseAuth, provider);
		if (!result || !result.user) {
			throw new Error('Google sign in failed');
		}
		const userDetails = result.user as GoogleUser;

		return userDetails.accessToken;
	} catch (error) {
		console.error('Error signing in with Google', error);
	}
}

export async function signOutFirebaseAuth() {
	try {
		await firebaseAuth.signOut();
	} catch (error) {
		console.error('Error signing out with Google', error);
	}
}