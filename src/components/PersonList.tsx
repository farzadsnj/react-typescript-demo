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
}