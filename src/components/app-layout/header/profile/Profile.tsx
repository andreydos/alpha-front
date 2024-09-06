"use client"

import { Avatar } from "flowbite-react"

import Loader from "@/components/ui/Loader"

import { useProfile } from "@/hooks/useProfile"

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='flex self-center'>
			{isLoading ? (
				<Loader darkClassName={"dark:text-gray-200"} />
			) : (
				<div className='flex items-center dark:text-gray-200'>
					<div className='text-right mr-3 hidden sm:block'>
						<p className='font-bold -mb-1 opacity-90'>{data?.name}</p>
						<p className='text-sm opacity-40'>{data?.email}</p>
					</div>

					{data?.photo ? (
						<Avatar
							img={data?.photo}
							status='online'
							statusPosition='bottom-left'
						/>
					) : (
						<Avatar
							placeholderInitials={data?.name?.charAt(0) || "*"}
							status='online'
							statusPosition='bottom-left'
						/>
					)}
				</div>
			)}
		</div>
	)
}
