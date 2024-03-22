import { Job } from '@/types/job.type'
import Link from 'next/link'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import DeleteJobBtn from './DeleteJobBtn'

dayjs.extend(relativeTime)

type Props = Job & {
	enableAction?: boolean
}
function JobCard({
	companyId: { company },
	title,
	location,
	updatedAt,
	_id,
	enableAction,
}: Props) {
	return (
		<div className='flex gap-5'>
			<div className='flex flex-col gap-2'>
				<p className='text-sm font-medium'>{company?.name || 'Company name'}</p>
				<Link href={`/jobs/${_id}`} className='text-lg font-semibold underline'>
					{title}
				</Link>
				<p className='text-xs bg-gray-100 w-max p-2 px-3 rounded-full'>
					{location}
				</p>
			</div>
			<div className='flex flex-col ml-auto'>
				<p className='text-sm font-light'>{dayjs(updatedAt).fromNow()}</p>
				{enableAction && (
					<div className='flex gap-5 mt-auto ml-auto'>
						<Link href={`/jobs/${_id}/edit`}>Edit</Link>
						<DeleteJobBtn id={_id} />
					</div>
				)}
			</div>
		</div>
	)
}

export default JobCard
