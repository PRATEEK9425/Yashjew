import axios from "axios"
import * as types from "./actiontype"

const Loginfn=()=>{
    return {
        type:types.Login_Post_req
    }
}
const LoginfnSuccessful=(payload)=>{
    return {
        type:types.Login_Post_req_success,
        payload
    }
}

const LoginfnFailure=()=>{
    return {
        type:types.Login_Post_req_failure
    }
}


const LoginMainFn=(payload)=>(dispatch)=>{
  
dispatch(Loginfn())
return axios.post(`${process.env.React_App_AdminLoginReducer}`,payload)
.then((res)=>{
dispatch(LoginfnSuccessful(res.data.token))

})
.catch((err)=>{
   dispatch(LoginfnFailure()) 
   console.log(err);
})
}

export{LoginMainFn}