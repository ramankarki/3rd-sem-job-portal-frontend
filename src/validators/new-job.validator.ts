import { IsNotEmpty, IsString } from 'class-validator'

export class NewJobValidator {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	location: string

	@IsString()
	@IsNotEmpty()
	description: string
}
