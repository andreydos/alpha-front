import { Header } from "@/components/Header/Header"
import { Post } from "@/components/ui/post/Post"

import { IPostResponse } from "@/types/post.types"

import { getAccessToken } from "@/auth-actions"
import { postService } from "@/services/post.service"

export default async function HomePage() {
	let posts: IPostResponse[] = []
	const session = await getAccessToken()

	try {
		const data = await postService.getRecentPosts()
		if (Array.isArray(data)) {
			posts = data
		} else {
			console.log("Error. Posts is not array")
		}
	} catch (error) {
		console.log("Error fetching posts:", error)
	}

	return (
		<div className='container mx-auto min-h-screen'>
			<div className='max-w-[900px] mx-auto w-full px-1 xs:px-2 sm:px-8 lg:px-0'>
				<Header session={session}></Header>
				<main className='flex flex-col max-h-screen overflow-auto'>
					{posts.map(p => (
						<Post
							key={p.id}
							postData={p}
						></Post>
					))}
				</main>
			</div>
		</div>
	)
}
