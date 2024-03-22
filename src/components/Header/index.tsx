'use client'

import Link from 'next/link'
import Logo from '../svgs/Logo'
import { useUser } from '@/context/user.context'
import { useRouter } from 'next/navigation'

function Header() {
	const { user, setUser } = useUser()
	const router = useRouter()

	const handleLogout = () => {
		setUser(null)
		router.push('/')
		router.refresh()
	}

	return (
		<div>
			<div className='flex py-5 px-4 items-center gap-5 max-w-screen-lg mx-auto'>
				<Link href='/'>
					<Logo className='w-8 h-8' />
				</Link>
				<div className='ml-auto' />

				{user ? (
					<>
						{user.role === 'EMPLOYER' && (
							<Link
								href='/dashboard'
								className='text-sm font-medium bg-primary px-4 py-2 rounded-full text-white'
							>
								Dashboard
							</Link>
						)}
						<button
							className='text-sm font-medium text-primary'
							onClick={handleLogout}
						>
							Logout
						</button>
					</>
				) : (
					<>
						<Link
							href='/auth/login'
							className='text-sm font-medium text-primary'
						>
							Sign in
						</Link>
						<Link
							href='/auth/signup'
							className='text-sm font-medium bg-primary px-4 py-2 rounded-full text-white'
						>
							Sign up
						</Link>
					</>
				)}
			</div>
		</div>
	)
}

export default Header
