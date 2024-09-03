'use client';

import {Post} from "@/components/ui/post/Post";
import { usePostStore } from "@/stores/postStore"
import { usePosts } from "@/hooks/usePosts"
import Loader from "@/components/ui/Loader"

export default function UserPostFeed() {
	const posts = usePostStore((state) => state.posts);
	const { data, isLoading } = usePosts()

	return (
		<div className='container mx-auto min-h-screen py-2'>
			<div className='max-w-[900px] mx-auto w-full px-4 sm:px-8 lg:px-0'>
				<main className='flex flex-col'>
					{isLoading ? <div className='p-4'><Loader /></div> : (
						<>
							{posts.map(p => <Post key={p.id} postData={p}></Post>)}
						</>
					)}
				</main>
			</div>
		</div>
	);
}

