import * as types from "./actiontype"
import axios from "axios"

const Admin_Excess_Emailpostreq=()=>{
    return {
        type:types.Adminexcess_EMAIL_POST
    }
}

const Admin_Excess_Emailpostreqsuccessful=(payload)=>{
    return{
        type:types.Adminexcess_EMAIL_POST_SUCCESSFUL,
        payload
    }
}

const Admin_Excess_EmailpostFailure=()=>{
return {
    type:types.Adminexcess_EMAIL_POST_FAILURE
}
}
// access main fn
const AdminaccessMainfn=(payload)=>(dispatch)=>{
dispatch(Admin_Excess_Emailpostreq())
return axios.post(`${process.env.React_App_AdminExcessReducer}`,payload)
.then((res)=>{
    dispatch(Admin_Excess_Emailpostreqsuccessful(res.data))

})
.catch((err)=>{
dispatch(Admin_Excess_EmailpostFailure())
})
}

export {AdminaccessMainfn}