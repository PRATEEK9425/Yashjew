import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const ResetFinalAuthProtector = ({children}) => {
    const isAuth = useSelector(state=>state.EmailReducer.isAuth)
  

    if(!isAuth ){
    return <Navigate to="/resetcheck1"  />
}

  return children
 
  
}
export default ResetFinalAuthProtector