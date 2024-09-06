import * as types from "./actiontype"

const initial={
    Data:"",
    isError:false,
    isLoading:false,
    isAuth:false
}

const OtpReducer =(state=initial,action)=>{
const {type,payload} = action
switch(type){
case types.Otp_Post_req:return{...state,isLoading:true}
case types.Otp_Post_req_success:return{...state,isLoading:false,isAuth:true,Data:payload}
  case types.Otp_Post_req_failure:return{...state,isError:true, Data:"",isAuth:false}
default : return state
}
}

export {OtpReducer}