import * as types from "./actiontype"

const initial ={
    isLoading:false,
    isError :false,
    token:""
}



const AdminAccessReducer  =(state=initial,action)=>{
const {type,payload} = action
switch(type){
case types.Adminexcess_EMAIL_POST:return {...state,isLoading:true}
case types.Adminexcess_EMAIL_POST_SUCCESSFUL:return{...state,isLoading:false,token:payload}
case types.Adminexcess_EMAIL_POST_FAILURE:return {...state,isError:true,token:""}
    default :return state
}
}

export {AdminAccessReducer }