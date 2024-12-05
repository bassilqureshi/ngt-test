import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cvData: null,
  dropdownsData: null,
};

export const CvCreateSlice = createSlice({
  name: 'CvCreate',
  initialState,
  reducers: {
    setCvData(state, action) {
        console.log(action.payload,"action.payload.cvData")
        state.cvData = action.payload;
    },
    setDropdownsData(state, action) {
      state.dropdownsData = action.payload.dropdownsData;
    },
  },
});

export const { setCvData, setDropdownsData } = CvCreateSlice.actions;


