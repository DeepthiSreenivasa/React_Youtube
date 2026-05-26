import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userDetails',
  initialState: { sideBarIsOpen: true },
  reducers: {
    sideBarToggle: (state) => {
      state.sideBarIsOpen = !state.sideBarIsOpen
    },
  },
})

export const { sideBarToggle } = userSlice.actions
export default userSlice.reducer
