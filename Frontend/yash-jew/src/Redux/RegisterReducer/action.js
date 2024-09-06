import * as types from "./actiontype"
import axios from "axios"

const RegisterPostfn=()=>{
    return{
type:types.Register_Post_req
    }
}
const RegisterPostfnSuccessful=(payload)=>{
    return{
type:types.Register_Post_req_success,
payload
    }
}
const RegisterPostfnFailure=()=>{
    return{
type:types.Register_Post_req_failure
    }
}


const MainRegisterFn=(payload)=>(dispatch)=>{
  console.log(payload);
dispatch(RegisterPostfn())
return axios.post(`${process.env.React_App_RegisterReducer}`,payload)
.then((res)=>{
    dispatch(RegisterPostfnSuccessful(res.data))
})
.catch((err)=>{
    dispatch(RegisterPostfnFailure())
    console.log(err);
})

}

export{MainRegisterFn}