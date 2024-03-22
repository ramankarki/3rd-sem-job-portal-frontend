export type Job = {
	_id: string
	companyId: {
		company: {
			name: string
			industry: string
		}
		_id: string
		email: string
		name: string
		role: string
		skills: string[]
		createdAt: string
		updatedAt: string
	}
	title: string
	description: string
	location: string
	createdAt: string
	updatedAt: string
}
