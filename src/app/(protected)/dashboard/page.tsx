import JobCardList from '@/components/JobCardList'
import { User } from '@/types/user.type'
import api from '@/utils/api'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

async function DashboardPage() {
	const cookie = cookies()
	let jobList = []
	let user: User | null = null

	try {
		const { data: userData } = await api.get<User>('/users/me', {
			headers: { Authorization: `Bearer ${cookie.get('token')?.value}` },
		})
		user = userData
		const { data } = await api.get(`/jobs?companyId=${user._id}`)
		jobList = data
	} catch (err) {
		return redirect('/')
	}

	return (
		<div className='max-w-screen-lg mx-auto'>
			<div className='flex items-center gap-5'>
				<h1 className='text-4xl font-bold text-dark-2'>Dashboard</h1>
				<div className='ml-auto' />
				<Link
					href='/jobs/create'
					className='text-md font-medium bg-primary px-4 py-2 rounded-full text-white'
				>
					New Job
				</Link>
				<Link
					href='/dashboard/profile'
					className='text-md font-medium bg-primary px-4 py-2 rounded-full text-white'
				>
					profile
				</Link>
			</div>
			<JobCardList jobList={jobList} companyId={user?._id} enableAction />
		</div>
	)
}

export default DashboardPage
