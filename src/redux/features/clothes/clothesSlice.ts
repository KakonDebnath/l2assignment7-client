import { createSlice } from '@reduxjs/toolkit';

type TClothesInitialState = {
  clotheId: null | string;
};

const initialState: TClothesInitialState = { clotheId: null };

const clotheSlice = createSlice({
  name: 'clothe',
  initialState,
  reducers: {
    setClotheId: (state, action) => {
      state.clotheId = action.payload;
    },
  },
});

export const { setClotheId } = clotheSlice.actions;

export default clotheSlice.reducer;
