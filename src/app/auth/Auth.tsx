'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button/Button'
import { Field } from '@/components/ui/fields/Field'

import { IAuthForm } from '@/types/auth.types'

import { APP_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'
import {errorCatch} from "@/api/error";
import {AxiosError, AxiosResponse} from "axios";

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success(isLoginForm ? 'Login successful!' : 'Registration successful! Please login.')
			reset()
			push(APP_PAGES.HOME)
		},
		onError(e: AxiosError) {
			toast.error(errorCatch(e))
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className='flex min-h-screen p-6 min-w-96'>
			<form
				className='sm:w-1/1 md:w-1/2 xl:w-1/3 m-auto shadow bg-sidebar rounded-xl p-layout'
				onSubmit={handleSubmit(onSubmit)}
			>
				<p style={{color: 'white'}}>Password restore will be here</p>

				{/*<div className='flex items-center gap-5 justify-center'>*/}
				{/*	<Button onClick={() => setIsLoginForm(true)}>Login</Button>*/}
				{/*	<Button onClick={() => setIsLoginForm(false)}>Register</Button>*/}
				{/*</div>*/}
			</form>
		</div>
	)
}
