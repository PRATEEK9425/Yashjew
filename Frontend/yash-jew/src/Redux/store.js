import {applyMiddleware, combineReducers, legacy_createStore} from "redux"

import {OrderReducer} from "./OrderList/OrderReducer"
import {EmailReducer} from "./EmailReducer/EmaILReducer"
import {RegisterReducer } from "./RegisterReducer/AuthticateReducer"
import {thunk} from "redux-thunk"
import { ResetReducer1 } from "./ResetStage1/Reset1Reducer"
import {AllOrderReducer} from "./ALLOrderReducer/AllOrderReducer"
import { GSOrderListReducer } from "./GSOrderListReducer/GSOrderReducer"
import { GPOrderListReducer } from "./GpOrdersReducer/GPOrderReducer"
import { BillReducer } from "./BillReducer/BillReducer"
import { AdminAccessReducer } from "./AdminExcessReducer/AdminReducer"
import { AdminLoginReducer } from "./AdminLoginReducer/LoginReducer"
import { OtpReducer } from "./OtpReducer/OtpReducer"

const RootReducer = combineReducers({ AdminAccessReducer,OtpReducer,AdminLoginReducer,BillReducer,ResetReducer1,OrderReducer,EmailReducer,RegisterReducer,AllOrderReducer,GSOrderListReducer,GPOrderListReducer})

const store = legacy_createStore(RootReducer,applyMiddleware(thunk))

export {store}