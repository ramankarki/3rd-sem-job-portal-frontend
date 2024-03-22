'use client'

import { Controller, useForm } from 'react-hook-form'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import InputField from '../InputField'
import Label from '../Label'
import Link from 'next/link'
import { SigninFormValidator } from '@/validators/signin-form.validator'
import toast from 'react-hot-toast'
import api from '@/utils/api'
import { useRouter } from 'next/navigation'
import { isAxiosError } from 'axios'
import { useUser } from '@/context/user.context'

function SigninForm() {
	const { handleSubmit, control } = useForm<SigninFormValidator>({
		resolver: classValidatorResolver(SigninFormValidator),
	})
	const router = useRouter()
	const { setUser } = useUser()

	const onSubmit = async (values: SigninFormValidator) => {
		const t1 = toast.loading('Loading...')
		try {
			const { data } = await api.post('/users/login', values)
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
			<button className='bg-primary rounded-full text-xl font-medium text-white py-2 px-4'>
				Login
			</button>
			<p className='text-center text-sm'>
				Don&apos;t have an account?{' '}
				<Link
					className='text-primary underline font-medium'
					href='/auth/signup'
				>
					Sign up
				</Link>
			</p>
		</form>
	)
}

export default SigninForm
