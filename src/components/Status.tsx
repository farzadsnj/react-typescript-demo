<<<<<<< HEAD
type StatusProps ={
    status: 'loading' | 'success' | 'error  '
}

export const Status = (props: StatusProps) =>{

    let message
    if(props.status === 'loading'){
        message = 'loading'
    }else if(props.status === 'success'){
        message = 'data fetched successfully'
    }else{
        message = 'error fetching data'
    }
    return(
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
=======
type StatusProps ={
    status: 'loading' | 'success' | 'error  '
}

export const Status = (props: StatusProps) =>{

    let message
    if(props.status === 'loading'){
        message = 'loading'
    }else if(props.status === 'success'){
        message = 'data fetched successfully'
    }else{
        message = 'error fetching data'
    }
    return(
        <div>
            <h2>Status - {message}</h2>
        </div>
    )
>>>>>>> 77a44e7a8a68b59852c17264c4d1648ef5b0a3fa
} 