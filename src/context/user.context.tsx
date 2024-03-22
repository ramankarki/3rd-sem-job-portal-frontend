'use client'

import { User } from '@/types/user.type'
import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from 'react'

type Context = {
	user: User | null
	setUser: Dispatch<SetStateAction<User | null>>
}
const userContext = createContext<Context>({} as Context)

type Props = {
	user: User | null
	children?: React.ReactNode
}
export function UserProvider({ user: defaultUser, children }: Props) {
	const [user, setUser] = useState<User | null>(defaultUser)

	return (
		<userContext.Provider value={{ user, setUser }}>
			{children}
		</userContext.Provider>
	)
}

export function useUser() {
	const context = useContext(userContext)
	if (context === undefined)
		throw new Error(`${UserProvider.name} is not defined`)
	return context
}
