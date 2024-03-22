'use client'

import { Controller, useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { SignupFormValidator } from '@/validators/signup-form.validator'
import InputField from '../InputField'
import Label from '../Label'
import Link from 'next/link'
import api from '../../utils/api'
import { isAxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/user.context'

function SignupForm() {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<SignupFormValidator>({
		resolver: classValidatorResolver(SignupFormValidator),
	})
	const router = useRouter()
	const { setUser } = useUser()

	const onSubmit = async (values: SignupFormValidator) => {
		const t1 = toast.loading('Loading...')
		try {
			const { data } = await api.post('/users/signup', values)
			setUser(data.user)
			router.push('/')
		} catch (err) {
			if (isAxiosError(err)) toast.error(err.response?.data.message)
		} finally {
			toast.dismiss(t1)
		}
	}

	return (
		<form
			className='flex flex-col gap-5 w-full max-w-lg pt-5 px-4'
			onSubmit={handleSubmit(onSubmit)}
		>
			<Label>
				<p>Name</p>
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
				<p>Role</p>
				<select className='text-base border p-2' {...register('role')}>
					<option value='' hidden>
						Select
					</option>
					<option value='SEEKER'>Job Seeker</option>
					<option value='EMPLOYER'>Employer</option>
				</select>
				{errors.role && (
					<div className='text-red-700 text-xs'>Role must be selected</div>
				)}
			</Label>
			<Label>
				<p>Email</p>
				<Controller
					control={control}
					name='email'
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
				<p>Password</p>
				<Controller
					control={control}
					name='password'
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
			<button
				className='bg-primary rounded-full text-xl font-medium text-white py-2 px-4'
				disabled={isSubmitting}
			>
				Sign up
			</button>
			<p className='text-center text-sm'>
				Already have an account?{' '}
				<Link className='text-primary underline font-medium' href='/auth/login'>
					Login
				</Link>
			</p>
		</form>
	)
}

export default SignupForm
