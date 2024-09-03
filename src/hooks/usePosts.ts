import { useQuery } from '@tanstack/react-query'

import { postService } from "@/services/post.service"

export function usePosts() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.loadPosts({size: 50, page: 1})
	})

	return { data, isLoading, isSuccess }
}
