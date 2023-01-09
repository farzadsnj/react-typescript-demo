<<<<<<< HEAD
import React from "react"

type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id: 1) => void
}

export const Button = (props: ButtonProps) =>{
    return <button onClick={(event) => props.handleClick(event,1)}>Click</button>
=======
import React from "react"

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({variant, children, ...rest}: ButtonProps) =>{
    return <button className={`class-with-${variant}`} {...rest}>{children}</button>
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
}