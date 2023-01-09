<<<<<<< HEAD
import React,{useState} from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)

    }

  return (
    <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logOut</button>
        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
=======
import React,{useState} from 'react'

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)

    }

  return (
    <div>
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logOut</button>
        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
