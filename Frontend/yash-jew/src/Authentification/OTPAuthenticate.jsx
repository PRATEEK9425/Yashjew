import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const OTPAuthenticate = ({children}) => {
    const isAuth= useSelector(state=>state.OtpReducer.isAuth)
    const Validotp = useSelector(state=>state.OtpReducer.Data)
// const location = useLocation() 
    if(!isAuth && !Validotp){
    return <Navigate to="/adminotpgen"  />
}

  return children
 
  
}

export default OTPAuthenticate 