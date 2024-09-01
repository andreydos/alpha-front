import { useEffect, useState } from 'react';

import { onAuthStateChanged } from "@/libs/firebase/auth";

export function useUserSession(InitSession: string | null) {
	const [userUid, setUserUid] = useState<string | null>(InitSession);

	// Listen for changes to the user session
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(async (authUser) => {
			if (authUser) {
				setUserUid(authUser.uid);
			} else if (InitSession === 'fake_storybook_session') {
				setUserUid('Fake User');
			} else {
				setUserUid(null);
			}
		});

		return () => unsubscribe();
	}, []);

	return userUid;
}