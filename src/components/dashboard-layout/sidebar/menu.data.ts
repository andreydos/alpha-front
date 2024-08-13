import {
	CalendarRange,
	LayoutDashboard,
	Settings,
} from 'lucide-react'

import { APP_PAGES } from '@/config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: APP_PAGES.HOME,
		name: 'Dashboard'
	},
	{
		icon: CalendarRange,
		link: APP_PAGES.TIME_BLOCKING,
		name: 'Time blocking'
	},
	{
		icon: Settings,
		link: APP_PAGES.SETTINGS,
		name: 'Settings'
	}
]
