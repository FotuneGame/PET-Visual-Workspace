import {combineSlices} from '@reduxjs/toolkit';
import {TestSlice} from "./test";

export const RootSlices = combineSlices(TestSlice,{
    test: TestSlice.reducer,
})