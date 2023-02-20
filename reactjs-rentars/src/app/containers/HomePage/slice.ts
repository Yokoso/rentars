import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
    featuredCars: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setFeaturedCars: (state, action) => {
            state.featuredCars = action.payload;
        }
    }
});

export const { setFeaturedCars } = homePageSlice.actions;
export default homePageSlice.reducer;