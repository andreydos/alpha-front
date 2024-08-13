import {postService} from "@/services/post.service";
import {IPostResponse} from "@/types/post.types";
import {Post} from "@/components/ui/post/Post";

export default async function HomePage() {
	let posts: IPostResponse[] = [];
	try {
		const data = await postService.getRecentPosts();
		if (Array.isArray(data)) {
			posts = data
		} else {
			throw new Error('Recent posts must be an array')
		}
	} catch (error) {
		console.error('Error fetching posts:', error); // Log any errors
	}

	return (
		<div className='grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<header>
				Потрібно увійти в систему
			</header>
			<div className='flex flex-col max-h-screen overflow-auto'>
				{posts.map(p => <Post key={p.id} postData={p}></Post>)}
			</div>
		</div>
	);
}

