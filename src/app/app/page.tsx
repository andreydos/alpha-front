import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import UserPostFeed from "@/app/app/UserPostFeed"

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<UserPostFeed></UserPostFeed>
		</div>
	)
}
