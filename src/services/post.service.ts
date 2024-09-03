import { IPostResponse } from '@/types/post.types';
import { axiosWithAuth } from '@/api/interceptors';
import { IPaginationPage } from "@/types/root.types";
import { usePostStore } from "@/stores/postStore"

class PostService {
	private BASE_URL = '/posts';

	async getRecentPosts() {
		try {
			const response = await axiosWithAuth.get<IPaginationPage<IPostResponse>>(this.BASE_URL + '?size=30&page=1');
			if (response?.data?.data) {
				return response.data.data
			} else {
				throw Error('Incorrect data received')
			}
		} catch (error) {
			console.error('Error in getRecentPosts:', error)
			throw error;
		}
	}

	async loadPosts({size = 50, page = 1}: {size: number, page: number}) {
		try {
			const response = await axiosWithAuth.get<IPaginationPage<IPostResponse>>(this.BASE_URL + `?size=${size}&page=${page}`);
			if (response?.data?.data) {
				const posts = usePostStore.getState().posts;
				if (posts.length === 0) {
					const setPosts = usePostStore.getState().setPosts;
					// if this is first load of posts add it to store
					setPosts(response.data.data);
				}
				return response.data.data;
			} else {
				throw Error('Incorrect post data received')
			}
		} catch (error) {
			console.error(`Error in loadPosts (size: ${size}, page: ${page}):`, error)
			throw error;
		}
	}
}

export const postService = new PostService();
