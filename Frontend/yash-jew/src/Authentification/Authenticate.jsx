import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const Authenticate = ({children}) => {
  const token = useSelector(state=>state.AdminLoginReducer.token)
    const AdminAuthcheck = useSelector(store=>store.AdminLoginReducer.isAuth)
const location = useLocation() 
    if(!AdminAuthcheck && !token ){
    return <Navigate to="/adminlogin" state={{name:location.pathname}}  />
}

  return children
 
  
}

export default Authenticate