'use client'

import { Controller, useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import toast from 'react-hot-toast'
import api from '@/utils/api'
import { isAxiosError } from 'axios'
import { useUser } from '@/context/user.context'
import Label from '@/components/Label'
import { CompanyProfileValidator } from '@/validators/company-profile.validator'
import InputField from '@/components/InputField'
import Link from 'next/link'

function ProfilePage() {
	const { user, setUser } = useUser()

	const { handleSubmit, control } = useForm<CompanyProfileValidator>({
		resolver: classValidatorResolver(CompanyProfileValidator),
		defaultValues: {
			name: user?.company?.name || '',
			industry: user?.company?.industry || '',
		},
	})

	const onSubmit = async (values: CompanyProfileValidator) => {
		const t1 = toast.loading('Loading...')
		try {
			const { data } = await api.patch('/users/update', { company: values })
			setUser(data.user)
			toast.success('Profile updated')
		} catch (err) {
			if (isAxiosError(err)) toast.error(err.response?.data.message)
		} finally {
			toast.dismiss(t1)
		}
	}

	return (
		<div className='max-w-screen-lg mx-auto'>
			<h1 className='text-4xl text-dark-2 font-bold text-center'>
				Company profile
			</h1>
			<form
				className='flex flex-col gap-5 w-full max-w-lg pt-5 px-4 mx-auto'
				onSubmit={handleSubmit(onSubmit)}
			>
				<Label>
					<p>Company name</p>
					<Controller
						control={control}
						name='name'
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
					<p>Industry</p>
					<Controller
						control={control}
						name='industry'
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
		</div>
	)
}

export default ProfilePage
