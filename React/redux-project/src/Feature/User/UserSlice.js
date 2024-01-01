

import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: "yash",
  },
  reducers: {
    setUserName: (state,action) => {
      state.name = action.payload
      console.log(action.payload)
    },
   
  },
})

export const { setUserName } = userSlice.actions
export default userSlice.reducer
