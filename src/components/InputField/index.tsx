type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	errMsg?: string
}

function InputField({ errMsg, ...props }: Props) {
	return (
		<>
			<input
				{...props}
				className={`text-base px-4 py-3 border w-full rounded-xl focus:border-gray-400 ${props.className} `}
			/>
			{errMsg && <div className='text-xs text-red-700'>{errMsg}</div>}
		</>
	)
}

export default InputField
