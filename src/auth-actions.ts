"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { APP_PAGES } from "./config/pages-url.config"
import { EnumTokens } from "@/services/auth.service"

const SAME_SITE_MODE = process.env.COOKIE_SAME_SITE_MODE as
	| "strict"
	| "lax"
	| "none"
	| undefined

export async function setAccessToken(uid: string) {
	cookies().set(EnumTokens.ACCESS_TOKEN, uid, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24, // One day
		path: "/",
		sameSite: SAME_SITE_MODE
	})
}

export async function setRefreshToken(uid: string) {
	cookies().set(EnumTokens.REFRESH_TOKEN, uid, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24, // One day
		path: "/",
		sameSite: SAME_SITE_MODE
	})
}

export async function getAccessToken() {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)
	return accessToken ? accessToken.value : null
}

export async function getRefreshToken() {
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)
	return refreshToken ? refreshToken.value : null
}

export async function removeAccessToken() {
	cookies().delete(EnumTokens.ACCESS_TOKEN)
}

export async function removeRefreshToken() {
	cookies().delete(EnumTokens.REFRESH_TOKEN)

	redirect(APP_PAGES.ROOT)
}
