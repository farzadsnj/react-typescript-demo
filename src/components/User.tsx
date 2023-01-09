import React,{useState} from 'react'

type UserProps ={
    name:string
    email:string
}

export const User = () => {
    const [user, setUser] = useState<UserProps>({} as UserProps)

    const handleLogin = () => {
        setUser({
            name:'farzad',
            email:'farzad@gmail'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }

  return (
    <div>
        <button onClick={handleLogin}>login User</button>
        {/* <button onClick={handleLogout}>logout User</button> */}
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
    </div>
  )
}
