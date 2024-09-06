import * as types from "./actiontype"


const initialdata={
    Data:[],
    isLoading:false,
    isError:false
}


const GPOrderListReducer =(state=initialdata,action)=>{

const {type,payload}=action
switch(type){
    case types.GP_Get_OrderList:return{...state,isLoading:true}
case types.GP_Get_OrderList_success:return{...state,isLoading:false,Data:payload}
case types.GP_Get_OrderList_Fail:return{...state,isError:true,Data:[]}
    default :return state
}
}

export { GPOrderListReducer }