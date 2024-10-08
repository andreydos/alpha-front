import HomePage from '@/app/HomePage'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Alpha - українська соцмережа',
	...NO_INDEX_PAGE
}

export default function Home() {
  return (
      <HomePage></HomePage>
  );
}
