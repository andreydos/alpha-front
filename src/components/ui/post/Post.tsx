import type { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'
import {IPostResponse} from "@/types/post.types";

interface IBadge {
	postData: IPostResponse
	className?: string
	variant?: string
	style?: CSSProperties
}

const post = tv({
	base: 'w-full rounded-md p-layout justify-center align-items-center flex flex-col mb-8 dark:bg-gray-700 dark:text-gray-100',
	variants: {
		backgroundColor: {
			regular: '',
			highlight: 'bg-gray-200/10',
		},
		shadow: {
			regular: 'shadow',
			highlight: 'shadow-md',
		}
	},
	defaultVariants: {
		backgroundColor: 'regular',
		shadow: 'regular'
	}
})

export function Post({
	postData,
	className,
	variant,
	style
}: PropsWithChildren<IBadge>) {
	return (
		<article
			className={post({
						backgroundColor: variant as "highlight" | "regular",
						shadow: variant as "highlight" | "regular",
						className,
					})}
			style={style}
		>
			{postData.content}
		</article>
	)
}
