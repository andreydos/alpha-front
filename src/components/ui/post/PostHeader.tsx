import { Avatar, Button } from "flowbite-react"
import { Ellipsis } from "lucide-react"
import type { PropsWithChildren } from "react"

import { IPostResponse } from "@/types/post.types"

interface IProps {
	postData: IPostResponse
}

export function PostHeader({ postData }: PropsWithChildren<IProps>) {
	const { createdByUserPhoto, createdDate, createdByUserName } = postData
	return (
		<div className='flex items-center space-x-4 p-2'>
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
					{createdByUserName || "---"}
				</p>
				<p className='truncate text-sm text-gray-500 dark:text-gray-400'>
					{createdDate?.split("T")[0].split("-").reverse().join(".")}
				</p>
			</div>
			<div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
				<button
					className={
						"focus:ring-1 w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:dark:bg-gray-900 hover:border-gray-500 transition-colors duration-300"
					}
				>
					<Ellipsis />
				</button>
			</div>
		</div>
	)
}
