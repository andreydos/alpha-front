'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'
import { signOutWithGoogle } from "@/libs/firebase/auth"
import { removeSession } from "@/auth-actions"
import { APP_PAGES } from "@/config/pages-url.config"

export function LogoutButton() {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => router.push('/auth')
	})

	const handleSignOut = async () => {
		await signOutWithGoogle();
		await removeSession();
	};

	return (
		<div className='ml-2 mt-2'>
			<button
				className='opacity-20 hover:opacity-100 transition-opacity duration-300'
				onClick={() => {
					handleSignOut().then(r => {
						router.push(APP_PAGES.ROOT)
						// mutate()
					})
				}}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}
