import SigninForm from '@/components/SigninForm'
import Logo from '@/components/svgs/Logo'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Signup | Job Portal',
}

export default function Page() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen gap-5'>
			<Logo className='w-16 h-16' />
			<h1 className='text-3xl md:text-4xl font-bold text-center'>
				Log in to Job Portal
			</h1>
			<SigninForm />
		</div>
	)
}
