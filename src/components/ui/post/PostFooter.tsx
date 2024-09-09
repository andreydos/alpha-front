import { Avatar, Button } from "flowbite-react"
import { BookMarked, Heart, MessageCircle } from "lucide-react"
import type { PropsWithChildren } from "react"

import { IPostResponse } from "@/types/post.types"

interface IProps {
	postData: IPostResponse
}

export function PostFooter({ postData }: PropsWithChildren<IProps>) {
	const { commentsCount, likedByMe, likesCount } = postData
	return (
		<div className='flex row items-center space-x-4 p-2'>
			<div className='shrink-0'>
				<button
					className={
						"focus:ring-1 h-12 px-2.5 dark:text-gray-500 rounded-xl hover:text-gray-400 flex items-center justify-center hover:dark:bg-gray-700 transition-colors duration-500"
					}
				>
					<div className='flex flex self-center'>
						<Heart className='mt-0.5'></Heart>
						<div className='pl-1'>{likesCount}</div>
					</div>
				</button>
			</div>
			<div className='min-w-0 flex-1'>
				<div className={"dark:text-gray-500 flex self-center h-8"}>
					<MessageCircle className='mt-0.5' />
					<div className='pl-1'>{commentsCount}</div>
				</div>
			</div>
			<div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
				<button
					className={
						"focus:ring-1 w-12 h-12 dark:text-gray-500 hover:text-gray-400 rounded-full flex items-center justify-center hover:dark:bg-gray-700 transition-colors duration-500"
					}
				>
					<BookMarked></BookMarked>
				</button>
			</div>
		</div>
	)
}
