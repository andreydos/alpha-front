import { User } from "firebase/auth"

export interface IAuthForm {
	email: string
	password: string
}

export interface GoogleUser extends User {
	accessToken: string
}

export interface IUser {
	id: number
	name?: string
	email: string

	workInterval?: number
	breakInterval?: number
	intervalsCount?: number
}

export interface IAuthResponse {
	accessToken: string
	user: IUser
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }
