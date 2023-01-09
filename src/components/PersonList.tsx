<<<<<<< HEAD
import {Name} from './Person.types'

type PersonListProps = {
    names:Name[]
}

export const PersonList = (props: PersonListProps) =>{
    return(
        <div>
            {
                props.names.map(n=>{
                    return(
                        <h2 key={n.fname}>{n.fname} {n.lname}</h2>
                    )
                })
            }
        </div>
    )
=======
import {Name} from './Person.types'

type PersonListProps = {
    names:Name[]
}

export const PersonList = (props: PersonListProps) =>{
    return(
        <div>
            {
                props.names.map(n=>{
                    return(
                        <h2 key={n.fname}>{n.fname} {n.lname}</h2>
                    )
                })
            }
        </div>
    )
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
}