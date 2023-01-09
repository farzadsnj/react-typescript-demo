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
}