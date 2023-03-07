import { configureStore } from "@reduxjs/toolkit";
import cusstomerSlice from "../features/cusstomerSlice";
import reservationSlice from "../features/reservationSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationSlice,
        customer: cusstomerSlice,
    },

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
