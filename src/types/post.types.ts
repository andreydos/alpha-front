import type { IBase } from './root.types'

export type PostStatus = 'ACTIVE' | 'HIDDEN' | 'DELETED';

export interface IPostCreateRequest {
	title: string;
	content: string;
	location?: Location | null;
	relatedProblemId?: number | null;
}

export interface IPostResponse extends IBase, IPostCreateRequest {
	relatedProblemName?: string;
	relatedProblemPreviewPhotoUrl?: string;
	createdByUserId: string;
	createdByUserName: string;
	createdByUserPhoto: string;
	status: PostStatus;
	previewPhotoUrl: string;
	previewPhotoWidth: number;
	previewPhotoHeight: number;
	viewsCount: number;
	commentsCount: number;
	storeLink: string;
	likesCount: number;
	likedByMe: boolean;
	saved: boolean;
}

export type TypePostFormState = Partial<
	Omit<IPostResponse, 'createdAt' | 'updatedAt'>
>
