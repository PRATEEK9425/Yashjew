import * as types from "./actiontype"


const initialdata={
    isLoading:false,
    isError:false,
    Orderdata:[]
}


const AllOrderReducer   =(state=initialdata,action)=>{
    const {type,payload}=action

    switch(type){
case types.Get_Orderdata:return{...state,isLoading:true};
case types.Get_Orderdata_successful:return{...state,isLoading:false,Orderdata:payload};
case types.Get_Orderdata_failure:return{...state,isError:true,Orderdata:[]}
        default :return state
    }
}


export {AllOrderReducer}