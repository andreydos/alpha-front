export interface IBase {
	id: string
	createdAt?: string
	updatedAt?: string
}

export interface IPaginationPage<R> {
	total: number;
	data: R[];
}
