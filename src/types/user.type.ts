export enum UserRole {
	SEEKER = 'SEEKER',
	EMPLOYER = 'EMPLOYER',
}

export type User = {
	_id: string
	email: string
	password: string
	name: string
	role: keyof typeof UserRole
	skills: string[]
	company?: {
		id: string
		name: string
		industry: string
	}
}
