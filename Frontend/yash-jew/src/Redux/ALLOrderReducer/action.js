import axios from "axios"
import * as types from "./actiontype"


const GetOrderReqfn=()=>{
    return{
        type:types.Get_Orderdata
    }
}

const GetOrderReqSuccessfulfn=(payload)=>{
    return{
        type:types.Get_Orderdata_successful,
        payload
    }
}

const GetOrderReqFailurefn=()=>{
    return{
        type:types.Get_Orderdata_failure
    }
}


const Get_ORDERMainfn  =(url)=>(dispatch)=>{
   
dispatch(GetOrderReqfn())
return axios.get(url)
.then((res)=>{
    dispatch(GetOrderReqSuccessfulfn(res.data))
})
.catch((err)=>{
    dispatch(GetOrderReqFailurefn())
})
}


export{Get_ORDERMainfn}