"use client"

import Loader from "@/components/ui/Loader"
import { Post } from "@/components/ui/post/Post"

import { usePosts } from "@/hooks/usePosts"

import { usePostStore } from "@/stores/postStore"

export default function UserPostFeed() {
	const posts = usePostStore(state => state.posts)
	const { data, isLoading } = usePosts()

	return (
		<div className='container mx-auto min-h-screen py-2'>
			<div className='max-w-[900px] mx-auto w-full px-1 xs:px-2 sm:px-8 lg:px-0'>
				<main className='flex flex-col'>
					{isLoading ? (
						<div className='p-4'>
							<Loader />
						</div>
					) : (
						<>
							{posts.map(p => (
								<Post
									key={p.id}
									postData={p}
								></Post>
							))}
						</>
					)}
				</main>
			</div>
		</div>
	)
}
