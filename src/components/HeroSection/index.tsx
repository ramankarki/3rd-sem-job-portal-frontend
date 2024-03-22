import Header from '../Header'
import InterviewIllustration from '../svgs/InterviewIllustration'

function HeroSection() {
	return (
		<div className='bg-gradient-cta pb-16'>
			<div className='max-w-screen-lg mx-auto'>
				<Header />
				<div className='mb-20'></div>
				<div className='flex flex-col gap-10'>
					<div className='text-center px-4'>
						<p className='text-5xl lg:text-6xl font-bold text-dark-2 mb-6'>
							Job Portal
						</p>
						<p className='text-lg text-dark-1 max-w-screen-sm mx-auto'>
							Are you searching for your next big opportunity? Or looking for
							the best people to join your team? This is your one-stop solution
							for connecting employers and job seekers.
						</p>
					</div>
					<picture className='max-w-40 mx-auto'>
						<InterviewIllustration className='w-full h-auto' />
					</picture>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
