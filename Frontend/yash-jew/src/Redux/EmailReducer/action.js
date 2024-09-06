import * as types from "./actiontype"
import axios from "axios"

const Emailpostreq=()=>{
    return {
        type:types.EMAIL_POST
    }
}

const Emailpostreqsuccessful=(payload)=>{
    return{
        type:types.EMAIL_POST_SUCCESSFUL,
        payload
    }
}

const EmailpostFailure=()=>{
return {
    type:types.EMAIL_POST_FAILURE
}
}


export {Emailpostreq,Emailpostreqsuccessful,EmailpostFailure}