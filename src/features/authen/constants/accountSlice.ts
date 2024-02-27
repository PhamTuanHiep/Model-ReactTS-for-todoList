import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../../app/store'

interface User {
  id: string;
  username: string;
  password:string,
  email: string;
  phone: string;
  image:string,
  }
export interface UserState {
  account: {
    id: string;
    username: string;
    password:string,
    email: string;
    phone: string;
    image:string,
  };
  isAuthen: boolean;
}
const initialState: UserState = {
  account: {
    id: '',
    username: "",
    password: "",
    email: "",
    phone: "",
    image:""
  },
  isAuthen:false
};

export const accountSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    doLogin: (state, action: PayloadAction<User>) => {
      state.account = action.payload;
      state.isAuthen= true
    },
  },
})

// Action creators are generated for each case reducer function
export const {doLogin} = accountSlice.actions
// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value
export default accountSlice.reducer