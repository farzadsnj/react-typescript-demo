<<<<<<< HEAD
import { useContext } from "react"
import { UserContext } from "./UserContext"

export  const user = () =>{
    const userContext = useContext(UserContext)
    const handleLoggedIn = () => {
        if(userContext){
            userContext.setUser({
                name:'farzad',
                email: 'farzad@gmail.com'
            })
        }
    }
    const handleLoggedOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
            <button onClick={handleLoggedIn}></button>
            <button onClick={handleLoggedOut}></button>
            <div>UserName is {userContext?.user?.name}</div>
            <div>email is {userContext?.user?.email}</div>
        </div>
    )
=======
import { useContext } from "react"
import { UserContext } from "./UserContext"

export  const user = () =>{
    const userContext = useContext(UserContext)
    const handleLoggedIn = () => {
        if(userContext){
            userContext.setUser({
                name:'farzad',
                email: 'farzad@gmail.com'
            })
        }
    }
    const handleLoggedOut = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }
    return(
        <div>
            <button onClick={handleLoggedIn}></button>
            <button onClick={handleLoggedOut}></button>
            <div>UserName is {userContext?.user?.name}</div>
            <div>email is {userContext?.user?.email}</div>
        </div>
    )
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
}