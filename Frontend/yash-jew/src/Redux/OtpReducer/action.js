import axios from "axios"
import * as types from "./actiontype"

const Otpfn=()=>{
    return {
        type:types.Otp_Post_req
    }
}
const OtpfnSuccessful =(payload)=>{
    return {
        type:types.Otp_Post_req_success,
        payload
    }
}

const OtpfnFailure=()=>{
    return {
        type:types.Otp_Post_req_failure 
    }
}


const OtpMainFn=(payload)=>(dispatch)=>{
  
dispatch(Otpfn())
return axios.post(`${process.env.React_App_OtpReducer}`,payload)
.then((res)=>{
dispatch(OtpfnSuccessful(res.data))
console.log(res.data);
})
.catch((err)=>{
   dispatch(OtpfnFailure()) 
   console.log(err);
})
}

export{OtpMainFn}