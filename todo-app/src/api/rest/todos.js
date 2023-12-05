import makeRequest from "../makeRequest"

export const todos =()=>{
    return makeRequest("/todos","GET",{autorization:true})
}