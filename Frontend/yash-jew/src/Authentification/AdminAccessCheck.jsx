import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const AdminAccessCheck  = ({children}) => {

    const token = useSelector(state=>state.AdminAccessReducer.token )
    const AdminAuthcheck = useSelector(store=>store.AdminAccessReducer.isAuth)

    if(!AdminAuthcheck && !token ){
    return <Navigate to="/adminaccess"  />
}

  return children
 
  
}

export default AdminAccessCheck