import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator'

export class SigninFormValidator {
	@IsEmail({}, { message: 'email must be valid' })
	email: string

	@IsString()
	@IsNotEmpty()
	password: string
}
