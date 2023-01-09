import React from "react"

type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id: 1) => void
}

export const Button = (props: ButtonProps) =>{
    return <button onClick={(event) => props.handleClick(event,1)}>Click</button>
}