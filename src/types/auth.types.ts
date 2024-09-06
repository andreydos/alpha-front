import { User } from "firebase/auth"

export interface IAuthForm {
	email: string
	password: string
}

export interface GoogleUser extends User {
	accessToken: string
}

export interface IUser {
	id: string
	createdDate: string
	status: string
	photo: string
	name: string
	about: string
	email: string
	emailVerified: any
	phone: any
	phoneVerified: any
	contactEmail: string
	contactPhone: any
	features: any[]
}

export interface IAuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string }
