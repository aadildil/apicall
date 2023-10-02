import { FETCH_POST_FAILURE,FETCH_POST_REQUEST_STARTED,FETCH_POST_SUCCESS } from "./actionsTypes";



export const fetchPostSuccess=(data)=>{

    return (

        {
            type:FETCH_POST_SUCCESS,
            payload:data
        }
    )
}

export const fetchPostfailure=(error)=>{

    return (

        {
            type:FETCH_POST_FAILURE,
            payload:error
        }
    )
}


export const fetchPostRequestStarted=()=>{

    return (

        {
            type:FETCH_POST_REQUEST_STARTED,
            
        }
    )
}
