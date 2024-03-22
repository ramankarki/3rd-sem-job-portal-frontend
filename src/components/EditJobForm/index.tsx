'use client'

import { Controller, useForm } from 'react-hook-form'
import Label from '../Label'
import InputField from '../InputField'
import { NewJobValidator } from '@/validators/new-job.validator'
import api from '@/utils/api'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import toast from 'react-hot-toast'
import { isAxiosError } from 'axios'
import Link from 'next/link'
import { Job } from '@/types/job.type'

type Props = {
	job: Job | null
}
function EditJobForm({ job }: Props) {
	const { handleSubmit, control, register } = useForm<NewJobValidator>({
		resolver: classValidatorResolver(NewJobValidator),
		defaultValues: {
			description: job?.description || '',
			location: job?.location || '',
			title: job?.title || '',
		},
	})

	const onSubmit = async (values: NewJobValidator) => {
		const t1 = toast.loading('Loading...')
		try {
			const { data } = await api.patch(`/jobs/${job?._id}`, values)
			toast.success('Job updated')
		} catch (err) {
			if (isAxiosError(err)) toast.error(err.response?.data.message)
		} finally {
			toast.dismiss(t1)
		}
	}

	return (
		<form
			className='flex flex-col gap-5 w-full max-w-lg pt-5 px-4 mx-auto'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Label>
				<p>Title</p>
				<Controller
					control={control}
					name='title'
					render={({ field, fieldState }) => (
						<InputField
							value={field.value}
							onChange={(e) => field.onChange(e.currentTarget.value)}
							type='text'
							errMsg={fieldState.error?.message}
						/>
					)}
				/>
			</Label>
			<Label>
				<p>Location</p>
				<Controller
					control={control}
					name='location'
					render={({ field, fieldState }) => (
						<InputField
							value={field.value}
							onChange={(e) => field.onChange(e.currentTarget.value)}
							type='text'
							errMsg={fieldState.error?.message}
						/>
					)}
				/>
			</Label>
			<Label>
				<p>Description</p>
				<textarea
					className='border rounded-xl py-3 px-4 min-h-40'
					{...register('description')}
				></textarea>
			</Label>
			<div className='flex gap-5'>
				<Link
					className='flex justify-center w-full bg-dark-2 rounded-full text-xl font-medium text-white py-2 px-4'
					href='/dashboard'
				>
					Back
				</Link>
				<button className='w-full bg-primary rounded-full text-xl font-medium text-white py-2 px-4'>
					Update
				</button>
			</div>
		</form>
	)
}

export default EditJobForm
