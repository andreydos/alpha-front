import { type NextRequest, NextResponse } from 'next/server'

import { APP_PAGES } from './config/pages-url.config'
// import { EnumTokens } from './services/auth-token.service'
import { SESSION_COOKIE_NAME } from "@/constants"

const notProtectedRoutes = [APP_PAGES.ROOT];

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const session = cookies.get(SESSION_COOKIE_NAME)?.value

	// Redirect to root if session is not set
	if (!session && !notProtectedRoutes.includes(request.nextUrl.pathname)) {
		const absoluteURL = new URL(APP_PAGES.ROOT, request.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}

	// Redirect to app start page if session is set and user tries to access root
	if (session && request.nextUrl.pathname === APP_PAGES.ROOT) {
		const absoluteURL = new URL(APP_PAGES.APP, request.nextUrl.origin);
		return NextResponse.redirect(absoluteURL.toString());
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/app/:path*', '/auth/:path']
}
