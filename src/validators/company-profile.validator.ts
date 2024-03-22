import { IsNotEmpty, IsString } from 'class-validator'

export class CompanyProfileValidator {
	@IsString()
	@IsNotEmpty()
	name: string

	@IsString()
	@IsNotEmpty()
	industry: string
}
