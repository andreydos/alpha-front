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
		link: APP_PAGES.APP,
		name: 'Стрічка'
	},
	{
		icon: CalendarRange,
		link: APP_PAGES.APP,
		name: 'Збережені дописи'
	},
	{
		icon: Settings,
		link: APP_PAGES.APP,
		name: 'Налаштування'
	}
]
