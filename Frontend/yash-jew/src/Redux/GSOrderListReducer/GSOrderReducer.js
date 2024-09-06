import * as types from "./actiontype"


const initialdata={
    Data:[],
    isLoading:false,
    isError:false
}


const GSOrderListReducer =(state=initialdata,action)=>{

const {type,payload}=action
switch(type){
    case types.GS_Get_OrderList:return{...state,isLoading:true}
case types.GS_Get_OrderList_success:return{...state,isLoading:false,Data:payload}
case types.GS_Get_OrderList_Fail:return{...state,isError:true,Data:[]}
    default :return state
}
}

export { GSOrderListReducer }