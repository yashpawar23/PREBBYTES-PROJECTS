import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {id:'1',title:'First Post',content:'Hello'},
    {id:'2',title:'Second Post',content:'More Text'}
]

export const PostSlice = createSlice({
    name:'Posr',
    initialstate ,
    reducers : {
       addpost:(state,action)=>{
        //  state.push(action.payload)
       }
    }
})
export default PostSlice.reducer