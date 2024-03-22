import { Job } from '@/types/job.type'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

type Props = Job
function JobCard({
	companyId: { company },
	title,
	location,
	updatedAt,
	_id,
}: Props) {
	return (
		<Link href={`/jobs/${_id}`} className='flex gap-5'>
			<div className='flex flex-col gap-2'>
				<p className='text-sm font-medium'>{company?.name || 'Company name'}</p>
				<p className='text-lg font-semibold'>{title}</p>
				<p className='text-xs'>{location}</p>
			</div>
			<div className='ml-auto'>
				<p className='text-sm font-light'>{dayjs(updatedAt).fromNow()}</p>
			</div>
		</Link>
	)
}

export default JobCard
