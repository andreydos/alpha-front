import {postService} from "@/services/post.service";
import {IPostResponse} from "@/types/post.types";
import {Post} from "@/components/ui/post/Post";
import { Header } from "@/components/Header/Header"
import { getAccessToken } from "@/auth-actions"

export default async function HomePage() {
	let posts: IPostResponse[] = [];
	const session = await getAccessToken();

	try {
		const data = await postService.getRecentPosts();
		if (Array.isArray(data)) {
			posts = data
		} else {
			throw new Error('Recent posts must be an array')
		}
	} catch (error) {
		console.error('Error fetching posts:', error);
	}

	return (
		<div className='container mx-auto min-h-screen'>
			<div className='max-w-[900px] mx-auto w-full px-4 sm:px-8 lg:px-0'>
				<Header session={session}></Header>
				<main className='flex flex-col max-h-screen overflow-auto'>
					{posts.map(p => <Post key={p.id} postData={p}></Post>)}
				</main>
			</div>
		</div>
	);
}

