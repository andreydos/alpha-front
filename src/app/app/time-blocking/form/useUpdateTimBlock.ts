import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeTimeBlockFormState } from '@/types/post.types'

import { timeBlockService } from '@/services/post.service'

export function useUpdateTimeBlock(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateTimeBlock } = useMutation({
		mutationKey: ['update time-block', key],
		mutationFn: ({ id, data }: { id: string; data: TypeTimeBlockFormState }) =>
			timeBlockService.updateTimeBlock(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['time-blocks']
			})
		}
	})

	return { updateTimeBlock }
}
