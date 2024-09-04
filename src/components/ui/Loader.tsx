import { Loader as LoaderIcon } from 'lucide-react'

const Loader = ({darkClassName, lightClassName}: {darkClassName?: string, lightClassName?: string}) => {
	return (
		<div className='flex justify-center items-center'>
			<LoaderIcon className={`animate-spin h-6 w-6 ${lightClassName || 'text-gray-700'} ${darkClassName || 'dark:text-gray-900'}`} />
		</div>
	)
}

export default Loader
