import { UserRole } from '@/types/user.type'
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator'

export class SignupFormValidator {
	@IsEmail({}, { message: 'email must be valid' })
	email: string

	@IsString()
	@IsNotEmpty()
	password: string

	@IsString()
	@IsNotEmpty()
	name: string

	@IsEnum(UserRole)
	role: keyof typeof UserRole
}
