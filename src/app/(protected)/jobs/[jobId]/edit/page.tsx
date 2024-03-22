import EditJobForm from '@/components/EditJobForm'
import { Job } from '@/types/job.type'
import api from '@/utils/api'
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

type Props = {
	params: { jobId: string }
}
async function EditJobPage({ params: { jobId } }: Props) {
	let job: Job | null = null

	try {
		const { data } = await api.get(`/jobs/${jobId}`)
		job = data
		if (!job) throw new Error('no jobs found')
	} catch (err) {
		return redirect('/')
	}

	return (
		<div className='max-w-screen-lg mx-auto'>
			<h1 className='text-4xl text-dark-2 font-bold text-center'>Edit Job</h1>
			<EditJobForm job={job} />
		</div>
	)
}

export default EditJobPage
