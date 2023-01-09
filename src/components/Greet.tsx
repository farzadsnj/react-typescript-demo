import React from 'react'
import { GreetProps } from './Greet.types'

export const Greet = (props: GreetProps) => {
    const {messageCount = 0} = props
  return (
    
    <div>
        <h2>
            {
                props.isLoggedIn ? `Welcome user ${props.name}!. you have ${messageCount} messages` :
                'welcome guest'
            }
        </h2>
    </div>
  )
}
