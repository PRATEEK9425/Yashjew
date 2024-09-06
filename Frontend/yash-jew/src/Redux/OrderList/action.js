import axios from "axios"
import * as types from "./actiontype"


const GetOrderList =()=>{
    return{
        type:types.Get_OrderList
    }
}

const GetOrderListSuccessful =(payload)=>{
    return{
        type:types.Get_OrderList_success,
        payload
    }
}

const GetOrderListFailure =()=>{
    return{
        type:types.Get_OrderList_Fail
    }
}

const Get_OrderList_Mainfn=()=>(dispatch)=> {
    dispatch(GetOrderList())
    axios.get(`${process.env.React_App_OrderList_url1}`)
    .then((res)=>{
dispatch(GetOrderListSuccessful(res.data))
    }).catch((err)=>{
dispatch(GetOrderListFailure())
    })
}

const FindIDnadDelete=(id)=>(dispatch)=>{
    
    return axios.delete(`${process.env.React_App_OrderList_url2}/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}



export {Get_OrderList_Mainfn,FindIDnadDelete}