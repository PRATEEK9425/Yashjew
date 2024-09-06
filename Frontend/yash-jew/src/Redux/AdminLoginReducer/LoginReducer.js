import * as types from "./actiontype"

const initial={
    isError:false,
    isLoading:false,
    isAuth:false,
    token:""
}

const AdminLoginReducer =(state=initial,action)=>{
const {type,payload} = action
switch(type){
case types.Login_Post_req:return{...state,isLoading:true}
case types.Login_Post_req_success:return{...state,isLoading:false,token:payload,isAuth:true}
  case types.Login_Post_req_failure:return{...state,isError:true,token:"",isAuth:false}
default : return state
}

}

export {AdminLoginReducer}