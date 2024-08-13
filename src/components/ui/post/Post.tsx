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
	base: 'w-1/4 m-auto rounded-xl p-layout justify-center align-items-center flex flex-col mb-5',
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
		<div
			className={post({
						backgroundColor: variant as "highlight" | "regular",
						shadow: variant as "highlight" | "regular",
						className
					})}
			style={style}
		>
			<br/>
			{postData.content}
			<br/>
		</div>
	)
}
