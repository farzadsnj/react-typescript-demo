import { PersonProps } from "./Person.types"

export const Person = (props: PersonProps) =>{
    return <div>first name {props.name.fname} family is {props.name.lname}</div>
}