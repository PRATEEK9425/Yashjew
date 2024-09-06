import axios from "axios"
import * as types from "./actiontype"


const ResetPass1=()=>{
return {
    type:types.Reset1_Post
}
}

const ResetPass1Success=(payload)=>{
    return{
        type:types.Reset1_Post_successs,
        payload
    }
}

const ResetPass1Failure=()=>{
    return {
        type:types.Reset1_Post_failure
    }
    }


    const ResetPass1Mainfn=(payload)=>(dispatch)=>{
        dispatch(ResetPass1())
        axios.post(`${process.env.React_App_ResetStage1}`,payload)
        .then((res)=>{
dispatch(ResetPass1Success(res.data))
        })
        .catch((err)=>{
dispatch(ResetPass1Failure())
        })
    }

    export{ResetPass1Mainfn}