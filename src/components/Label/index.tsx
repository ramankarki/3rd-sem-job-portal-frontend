function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
	return (
		<label
			{...props}
			className={`flex flex-col gap-2 [&>p]:text-sm [&>p]:text-dark-1 ${props.className}`}
		></label>
	)
}

export default Label
