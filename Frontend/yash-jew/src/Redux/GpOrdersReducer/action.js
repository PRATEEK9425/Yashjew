import axios from "axios"
import * as types from "./actiontype"


const GPGetOrderList =()=>{
    return{
        type:types.GP_Get_OrderList
    }
}

const GPGetOrderListSuccessful =(payload)=>{
    return{
        type:types.GP_Get_OrderList_success,
        payload
    }
}

const GPGetOrderListFailure =()=>{
    return{
        type:types.GP_Get_OrderList_Fail
    }
}

const GetGoldPlatingOrderlistmainfn=()=>(dispatch)=> {
    dispatch(GPGetOrderList())
    return axios.get(`${process.env.React_App_GpOrdersReducer_url1}` )
    .then((res)=>{
dispatch(GPGetOrderListSuccessful(res.data))
    }).catch((err)=>{
dispatch( GPGetOrderListFailure())
    })
}

const FindIDandDeleteGP =(id)=>(dispatch)=>{
    
    return axios.delete(`${process.env.React_App_GpOrdersReducer_url2}/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}



export {GetGoldPlatingOrderlistmainfn ,FindIDandDeleteGP}