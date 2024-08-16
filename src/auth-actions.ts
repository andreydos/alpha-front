'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { SESSION_COOKIE_NAME } from '@/constants';
import { APP_PAGES } from './config/pages-url.config'

export async function createSession(uid: string) {
	cookies().set(SESSION_COOKIE_NAME, uid, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24, // One day
		path: '/',
	});

	redirect(APP_PAGES.APP);
}

export async function removeSession() {
	cookies().delete(SESSION_COOKIE_NAME);

	redirect(APP_PAGES.ROOT);
}