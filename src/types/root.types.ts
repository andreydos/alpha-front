export interface IBase {
	id: string | number
	createdDate?: string
	updatedDate?: string
}

export interface IPaginationPage<R> {
	total: number
	data: R[]
}
