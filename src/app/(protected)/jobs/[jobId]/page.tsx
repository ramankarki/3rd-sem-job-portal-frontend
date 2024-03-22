import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Job } from '@/types/job.type'
import api from '@/utils/api'

dayjs.extend(relativeTime)

export const dynamic = 'force-dynamic'

type Props = {
	params: { jobId: string }
}
async function JobDetailPage({ params: { jobId } }: Props) {
	const { data: job } = await api.get<Job>(`/jobs/${jobId}`)
	return (
		<div className='flex items-start gap-5 max-w-screen-lg mx-auto'>
			<div className='w-full'>
				<div className='pb-4'>
					<h1 className='text-4xl font-semibold pb-4 text-dark-2'>
						{job.title}
					</h1>
					<p className='text-sm font-light pb-4'>
						{dayjs(job.updatedAt).fromNow()}
					</p>
					<p className='text-xs bg-gray-100 w-max p-2 px-3 rounded-full'>
						{job.location}
					</p>
				</div>
				<p>{job.description}</p>
			</div>
			<div className='border min-w-60 max-w-sm p-4'>
				<p className='text-lg font-semibold text-dark-2'>
					{job.companyId.company.name}
				</p>
				<p className='text-sm text-dark-1'>{job.companyId.company.industry}</p>
				<button className='mt-4 w-full text-sm font-medium bg-primary px-4 py-2 rounded-full text-white'>
					Apply
				</button>
			</div>
		</div>
	)
}

export default JobDetailPage
