'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { APP_PAGES } from './config/pages-url.config'
import { EnumTokens } from "@/services/auth.service"

export async function setAccessToken(uid: string) {
	cookies().set(EnumTokens.ACCESS_TOKEN, uid, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24, // One day
		path: '/',
	});

	redirect(APP_PAGES.APP);
}

export async function getAccessToken() {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)
	return accessToken || null
}

export async function removeAccessToken() {
	cookies().delete(EnumTokens.ACCESS_TOKEN);
}

export async function removeRefreshToken() {
	cookies().delete(EnumTokens.REFRESH_TOKEN);

	redirect(APP_PAGES.ROOT);
}