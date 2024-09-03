import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout dark:text-gray-400 dark:hover:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
