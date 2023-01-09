<<<<<<< HEAD
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
=======
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
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
