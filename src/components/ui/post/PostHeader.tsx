import { Avatar } from "flowbite-react"
import type { PropsWithChildren } from "react"

import { IPostResponse } from "@/types/post.types"

interface IProps {
	postData: IPostResponse
}

export function PostHeader({ postData }: PropsWithChildren<IProps>) {
	const { createdByUserPhoto, createdDate, createdByUserName } = postData
	return (
		<div>
			<div className='flex items-center space-x-4'>
				<div className='shrink-0'>
					{createdByUserPhoto ? (
						<Avatar img={createdByUserPhoto} />
					) : (
						<Avatar
							placeholderInitials={
								createdByUserName ? createdByUserName.charAt(0) : "*"
							}
						/>
					)}
				</div>
				<div className='min-w-0 flex-1'>
					<p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
						{createdByUserName}
					</p>
					<p className='truncate text-sm text-gray-500 dark:text-gray-400'>
						{createdDate}
					</p>
				</div>
				<div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
					...
				</div>
			</div>
		</div>
	)
}
