import HeroSection from '@/components/HeroSection'
import JobCardList from '@/components/JobCardList'
import api from '@/utils/api'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Job portal',
}

export default async function Home() {
	let jobList = []

	try {
		const { data } = await api.get(`/jobs`)
		jobList = data
	} catch (err) {}

	return (
		<div>
			<HeroSection />
			<div className='max-w-screen-lg mx-auto py-16'>
				<p className='text-2xl font-semibold text-dark-2'>Latest jobs</p>
				<JobCardList jobList={jobList} />
			</div>
		</div>
	)
}
