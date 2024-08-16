import { IPostResponse } from '@/types/post.types';
import { axiosWithAuth } from '@/api/interceptors';
import { IPaginationPage } from "@/types/root.types";

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
}

export const postService = new PostService();
