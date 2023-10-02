import { FETCH_POST_FAILURE,FETCH_POST_REQUEST_STARTED,FETCH_POST_SUCCESS } from "../action/actionsTypes.js";


const initialState={

    loader:false,
    data:[],
    error:null
}


const postReducer=(state=initialState,action)=>{


    if(action.type===FETCH_POST_REQUEST_STARTED)
    {
        return {...state,loder:true}
    }
    else if(action.type===FETCH_POST_FAILURE)
    {
        return {...state,loader:false,error:action.payload,data:[]}
    }
    else if(action.type===FETCH_POST_SUCCESS)
    {
         return {...state,loader:false,data:action.payload,error:null} 
    }
    else
    return state;
}

export default postReducer;