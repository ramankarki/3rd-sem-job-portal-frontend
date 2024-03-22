'use client'

import { Job } from '@/types/job.type'
import { useState } from 'react'
import JobCard from '../JobCard'
import api from '@/utils/api'
import toast from 'react-hot-toast'

type Props = {
	jobList: Job[]
	companyId?: string
}
function JobCardList({ jobList, companyId }: Props) {
	const [jobs, setJobs] = useState<Job[]>(jobList)
	const limit = 10

	console.log(jobs)

	const handleMoreJobs = async () => {
		const t1 = toast.loading('Loading...', { duration: 9999 })
		try {
			const url = new URLSearchParams({
				page: `${jobs.length / limit + 1}`,
				limit: `${limit}`,
			})
			if (companyId) url.append('companyId', companyId)
			const { data } = await api.get(`/jobs?${url.toString()}`)
			setJobs((prev) => [...prev, ...data])
		} catch (err) {
		} finally {
			toast.dismiss(t1)
		}
	}

	return (
		<div className='pt-10 flex flex-col gap-5'>
			{jobs.map((job) => (
				<div className='flex flex-col gap-5' key={job._id}>
					<JobCard {...job} />
					<hr />
				</div>
			))}
			<button
				className='text-sm font-medium bg-primary px-4 py-2 rounded-full text-white mx-auto block'
				onClick={handleMoreJobs}
			>
				more jobs
			</button>
		</div>
	)
}

export default JobCardList
