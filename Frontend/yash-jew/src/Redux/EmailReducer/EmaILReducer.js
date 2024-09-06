import * as types from "./actiontype"

const initial ={
    isLoading:false,
    isError :false,
    UserDetails:[],
    isAuth:false
}



const EmailReducer=(state=initial,action)=>{
const {type,payload} = action
switch(type){
case types.EMAIL_POST:return {...state,isLoading:true}
case types.EMAIL_POST_SUCCESSFUL:return{...state,isAuth:true,isLoading:false,UserDetails:[...state.UserDetails,payload]}
case types.EMAIL_POST_FAILURE:return {...state,isError:true,UserDetails:[],isAuth:false}
    default :return state
}
}

export {EmailReducer}