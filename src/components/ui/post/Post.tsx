import Image from "next/image"
import type { CSSProperties, PropsWithChildren } from "react"
import { tv } from "tailwind-variants"

import { PostHeader } from "@/components/ui/post/PostHeader"

import { IPostResponse } from "@/types/post.types"

interface IProps {
	postData: IPostResponse
	className?: string
	variant?: string
	index?: number
	style?: CSSProperties
}

const post = tv({
	// base: "w-full rounded-md p-layout justify-center align-items-center flex flex-col mb-8 dark:bg-gray-700 dark:text-gray-100",
	base: "flex rounded-md bg-white shadow-md dark:bg-gray-800 flex-col mb-8 overflow-hidden",
	variants: {
		backgroundColor: {
			regular: "",
			highlight: "bg-gray-200/10"
		},
		shadow: {
			regular: "shadow",
			highlight: "shadow-md"
		}
	},
	defaultVariants: {
		backgroundColor: "regular",
		shadow: "regular"
	}
})

export function Post({
	postData,
	className,
	variant,
	index,
	style
}: PropsWithChildren<IProps>) {
	return (
		<article
			className={post({
				backgroundColor: variant as "highlight" | "regular",
				shadow: variant as "highlight" | "regular",
				className
			})}
			style={style}
		>
			<PostHeader postData={postData}></PostHeader>
			{postData.previewPhotoUrl && (
				<div className={"relative w-full aspect-square overflow-hidden"}>
					<Image
						width={postData.previewPhotoWidth}
						height={postData.previewPhotoHeight}
						priority={typeof index === "number" && index < 3} // only if it's first images
						className={"absolute inset-0 w-full h-full object-cover"}
						src={postData.previewPhotoUrl}
						alt='зображення з допису'
					/>
				</div>
			)}
			{postData.content && (
				<p className='p-layout font-normal text-gray-700 dark:text-gray-400'>
					{postData.content}
				</p>
			)}
		</article>
	)
}
