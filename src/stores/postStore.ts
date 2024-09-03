import { create } from 'zustand';
import { IPostResponse } from "@/types/post.types"

interface PostStore {
	posts: IPostResponse[];
	setPosts: (postList: IPostResponse[]) => void;
	addPost: (post: IPostResponse) => void;
	removePost: (id: number) => void;
}

export const usePostStore = create<PostStore>((set) => ({
	posts: [],
	setPosts: (postList: IPostResponse[]) => set((state) => ({ posts: postList })),
	addPost: (post: IPostResponse) => set((state) => ({ posts: [...state.posts, post] })),
	removePost: (id) => set((state) => ({
		posts: state.posts.filter((post: IPostResponse) => post.id !== id),
	})),
}));
