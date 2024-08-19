'use client'

import { LogOut } from 'lucide-react'
import { authService } from '@/services/auth.service'
import { signOutWithGoogle } from "@/libs/firebase/auth"

export function LogoutButton() {
	const handleSignOut = async () => {
		await signOutWithGoogle();
		await authService.logout()
	};

	return (
		<div className='ml-2 mt-2'>
			<button
				className='opacity-20 hover:opacity-100 transition-opacity duration-300'
				onClick={async () => {
					await handleSignOut()
				}}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}
