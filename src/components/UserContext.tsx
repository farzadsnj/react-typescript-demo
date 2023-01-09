<<<<<<< HEAD
import React, { createContext, useState } from "react"

export type AuthUser ={
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
=======
import React, { createContext, useState } from "react"

export type AuthUser ={
    name: string
    email: string
}

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
    const [user, setUser] = useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
}