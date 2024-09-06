import * as types from "./actiontype"

const initial={
    data:"",
    isError:false,
    isLoading:false
}

const RegisterReducer  =(state=initial,action)=>{
const {type,payload} = action
switch(type){
case types.Register_Post_req:return{...state,isLoading:true}
case types.Register_Post_req_success:return{...state,isLoading:false,data:payload}
  case types.Register_Post_req_failure:return{...state,isError:true,data:""}
default : return state
}

}

export {RegisterReducer}