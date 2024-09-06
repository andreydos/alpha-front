import Link from "next/link"

import { IMenuItem } from "./menu.interface"

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center justify-center md:justify-start py-2 mt-2 md:px-layout dark:text-gray-400 dark:hover:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg'
			>
				<item.icon />
				<span className={"hidden md:inline"}>{item.name}</span>
			</Link>
		</div>
	)
}
