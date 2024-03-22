import Header from '@/components/Header'

function ProtectedLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<div className='pb-10' />
			{children}
		</>
	)
}

export default ProtectedLayout
