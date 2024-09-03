import { Loader as LoaderIcon } from 'lucide-react'

const Loader = () => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon className='animate-spin h-6 w-6 text-white-gray-700 dark:text-gray-900' />
		</div>
	)
}

export default Loader
