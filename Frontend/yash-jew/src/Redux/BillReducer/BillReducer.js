import * as types from "./actiontype"


const initialdata={
    Data:[],
    isLoading:false,
    isError:false
}


const BillReducer =(state=initialdata,action)=>{

const {type,payload}=action
switch(type){
    case types.Bill_Getdata:return{...state,isLoading:true}
case types.Bill_Getdata_success:return{...state,isLoading:false,Data:payload}
case types.Bill_Getdata_Failure:return{...state,isError:true,Data:[]}
    default :return state
}
}

export { BillReducer }