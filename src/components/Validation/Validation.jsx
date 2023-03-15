import React, { useState } from 'react'
import regex from './'

const Validation = () => {
    const [email, setEmail] = useState("")
    const [isValid, setIsValid] = useState()

    const handleValidation = (e) =>{
        setEmail(e.target.value)
        
        if(regex.email.test(email)){
            setIsValid(true)
        }else{
            setIsValid(false)
        }
    }
    
  return (
    <div>
        {isValid===false && <p style={{color:"red"}}>Email is Invalid</p>  }
        <input type="text" id="email" onChange={handleValidation}/>
    </div>
  )
}

export default Validation