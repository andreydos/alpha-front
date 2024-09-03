import type { PropsWithChildren } from 'react'

import AppLayout from '@/components/app-layout/AppLayout'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return <AppLayout>{children}</AppLayout>
}
