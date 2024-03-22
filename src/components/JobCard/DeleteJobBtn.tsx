'use client'

import api from '@/utils/api'
import { isAxiosError } from 'axios'

import toast from 'react-hot-toast'

type Props = {
	id: string
}
function DeleteJobBtn({ id }: Props) {
	const handleDelete = async () => {
		try {
			await api.delete(`/jobs/${id}`)
			toast.success('Job deleted')
			window.location.reload()
		} catch (err) {
			if (isAxiosError(err)) toast.success(err.response?.data.message)
		}
	}

	return (
		<button onClick={handleDelete} className='text-red-700'>
			Delete
		</button>
	)
}

export default DeleteJobBtn
