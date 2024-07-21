import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface IState{
    value:number,
}

const InitialState: IState = {
  value:1,
}

export const TestSlice = createSlice({
  name: 'Test',
  initialState:InitialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) =>{
      state.value = action.payload;
    },
    setDefault: (state) =>{
      Object.assign(state, InitialState);
    }
  },
})


export const actions = TestSlice.actions;
export default TestSlice.reducer