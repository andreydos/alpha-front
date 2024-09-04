'use client'

import Loader from '@/components/ui/Loader'
import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='flex self-center'>
			{isLoading ? (
				<Loader darkClassName={'dark:text-gray-200'} />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>

					<div className='w-7 h-7 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase'>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	)
}
