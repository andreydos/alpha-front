import type { PropsWithChildren } from "react"

import { Header } from "./header/Header"
import { Sidebar } from "./sidebar/Sidebar"

export default function AppLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className={"flex flex-row gap-1"}>
			<Sidebar />
			<Header />
			<div className={"md:w-80"}></div>
			<main className='m-auto p-big-layout mt-7 pl-20 lg:pl-16 pt-8 relative w-full dark:bg-gray-400'>
				{children}
			</main>
		</div>
	)
}
