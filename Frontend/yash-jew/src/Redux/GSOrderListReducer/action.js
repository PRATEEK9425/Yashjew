import axios from "axios"
import * as types from "./actiontype"


const GSGetOrderList =()=>{
    return{
        type:types.GS_Get_OrderList
    }
}

const GSGetOrderListSuccessful =(payload)=>{
    return{
        type:types.GS_Get_OrderList_success,
        payload
    }
}

const GSGetOrderListFailure =()=>{
    return{
        type:types.GS_Get_OrderList_Fail
    }
}

const GetGold_Silver_Orderlistmainfn=()=>(dispatch)=> {
    dispatch(GSGetOrderList())
    return axios.get(`/website/orderlist/webgold-Allorders`)
    .then((res)=>{
dispatch(GSGetOrderListSuccessful(res.data))
    }).catch((err)=>{
dispatch( GSGetOrderListFailure())
    })
}

const FindIDandDeleteGS =(id)=>(dispatch)=>{
    
    return axios.delete(`${process.env.React_App_GSOrderListReducer_url2}/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}



export {GetGold_Silver_Orderlistmainfn,FindIDandDeleteGS}