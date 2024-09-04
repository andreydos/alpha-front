import { create } from 'zustand';
// import { IPostResponse } from "@/types/post.types"

interface AccountStore {
	firebaseAccountData: any;
	setFirebaseAccountData: (firebaseAccountData: any) => void;
	userAccountData: any;
	setUserAccountData: (userAccountData: any) => void;
}

export const useAccountStore = create<AccountStore>((set) => ({
	firebaseAccountData: {},
	userAccountData: {},
	setFirebaseAccountData: (_firebaseAccountData: any) => set((state) => ({ firebaseAccountData: _firebaseAccountData })),
	setUserAccountData: (_userAccountData: any) => set((state) => ({ userAccountData: _userAccountData })),
}));
