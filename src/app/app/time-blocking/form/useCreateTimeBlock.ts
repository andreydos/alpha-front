import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTimeBlockFormState } from '@/types/post.types'

import { timeBlockService } from '@/services/post.service'

export function useCreateTimeBlock() {
	const queryClient = useQueryClient()

	const { mutate: createTimeBlock, isPending } = useMutation({
		mutationKey: ['create time-block'],
		mutationFn: (data: TypeTimeBlockFormState) =>
			timeBlockService.createTimeBlock(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return {
		createTimeBlock,
		isPending
	}
}
