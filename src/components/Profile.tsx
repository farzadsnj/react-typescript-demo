export type ProfileProps = {
    name: string
}

export const profile = ({name}: ProfileProps) =>{
    return <div>Private Profile Component name is {name}</div>
}