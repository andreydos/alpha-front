'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { LogoutButton } from './LogoutButton'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside style={{zIndex: 1}} className='fixed shadow w-64 pt-10 dark:bg-gray-700 border-r border-r-border h-full  flex flex-col justify-between'>
			<div>
				<div className='p-3 relative'>
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='text-xs opacity-40 font-normal text-center p-layout'>
				Alpha
			</footer>
		</aside>
	)
}
