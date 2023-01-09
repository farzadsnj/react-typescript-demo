import { useRef, useEffect } from "react";

export const DomRef = () =>{
    const inputRef = useRef<HTMLInputElement>(null!) //with ! we dont need ? in current

    useEffect(()=> {
        // inputRef.current?.focus() one way to write
        inputRef.current.focus()
    },[])

    return(
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}