import { createSlice } from '@reduxjs/toolkit';
import { ICECREAMS } from '../../app/shared/ICECREAMS.JS';

const initialState ={
    icecreamArray : ICECREAMS
};

const iceSlice = createSlice({
    name: 'icecreams',
    initialState

});

export const icecreamsReducer = iceSlice.reducer;

export const selectAllIceCreams = (state) => {
    return state.icecreams.icecreamArray;
};

export const selectIcecreamById = (id) => (state) => {
    return state.icecreams.icecreamArray.find(
        (icecream) => icecream.id === parseInt(id));
};

export const SelectFeaturedCream = (state) => {
    return state.icecreams.icecreamArray.find(
        (icecream) => icecream.featured);
}
