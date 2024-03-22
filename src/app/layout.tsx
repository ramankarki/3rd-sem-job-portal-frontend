import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import api from '@/utils/api'
import { UserProvider } from '@/context/user.context'
import { User } from '@/types/user.type'
import { cookies } from 'next/headers'

const poppins = Poppins({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	let user: User | null = null
	try {
		const cookie = cookies()
		const { data } = await api.get<User>('/users/me', {
			headers: { Authorization: `Bearer ${cookie.get('token')?.value}` },
		})
		user = data
	} catch (err) {}

	return (
		<html lang='en'>
			<body className={poppins.className}>
				<UserProvider user={user}>{children}</UserProvider>
				<Toaster position='top-center' />
			</body>
		</html>
	)
}
