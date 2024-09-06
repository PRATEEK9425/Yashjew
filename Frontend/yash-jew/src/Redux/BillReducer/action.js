import axios from "axios"
import * as types from "./actiontype"


const BillGetdatafn =()=>{
    return{
        type:types.Bill_Getdata
    }
}

const BillGetdatasuccessfn =(payload)=>{
    return{
        type:types.Bill_Getdata_success,
        payload
    }
}

const BillGetdataFailurefn =()=>{
    return{
        type:types.Bill_Getdata_Failure
    }
}

const BilldataMainFn=()=>(dispatch)=> {
    dispatch(BillGetdatafn())
    return axios.get(`${process.env.React_App_BillReducer_url1}`)
    .then((res)=>{
dispatch(BillGetdatasuccessfn(res.data))
    }).catch((err)=>{
dispatch( BillGetdataFailurefn())
    })
}

const Billdata_FindByIdandDel =(id)=>(dispatch)=>{
    
    return axios.delete(`${process.env.React_App_BillReducer_url2}/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}



export {BilldataMainFn,Billdata_FindByIdandDel}