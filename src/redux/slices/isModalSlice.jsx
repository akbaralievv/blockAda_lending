import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpenModal: false,
  isActive: false,
  isVisible: false,
};

const isModalSlice = createSlice({
  name: 'isModal',
  initialState,
  reducers: {
    setIsOpenModal: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsOpenModal, setIsActive, setIsVisible } = isModalSlice.actions;
export default isModalSlice.reducer;
