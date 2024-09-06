import * as types from "./actiontype"

const initial={
    isloading:false,
    isError:false,
    isAuth:false,
    otpstatus:""
}

const ResetReducer1=(state=initial,action)=>{
const {type,payload} = action 
switch(type){

case types.Reset1_Post:return{...state,isloading:true}
case types.Reset1_Post_successs:return{...state,isloading:false,isAuth:true, otpstatus:payload  }
   case types.Reset1_Post_failure:return{...state,isAuth:false, otpstatus:"",isError:true}
default :return state
}
}

export {ResetReducer1}