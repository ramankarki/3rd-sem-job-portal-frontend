function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			height='21px'
			viewBox='0 0 20 21'
			width='20px'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M18 4h-4V2l-2-2H8L6 2v2H2C.9 4 0 4.9 0 6v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-6 0H8V2h4v2z'
				transform='translate(-380 -506) translate(380 506.5)'
				fill='#3490b0'
				fillRule='evenodd'
				stroke='none'
				strokeWidth={1}
			/>
		</svg>
	)
}

export default Logo
