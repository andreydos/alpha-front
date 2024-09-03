export interface IBase {
	id: string | number;
	createdAt?: string;
	updatedAt?: string;
}

export interface IPaginationPage<R> {
	total: number;
	data: R[];
}
