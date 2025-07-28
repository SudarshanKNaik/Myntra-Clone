import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemSlice';
import fetchStatusSlice from './fetStatusSlice';
import bagSlice from './BagSlice'; 

const myntrastore= configureStore({
    reducer: {
        item: itemsSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
    },
});

export default myntrastore;