/************************************************************************************************************
 *                                                                                                          *
 * File: store.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Redux store created for data global storage                                                 *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import menuSlice from "./slices/menuSlice";
import voiceSlice from "./slices/voiceSlice";
import speechDBSlice from "./slices/speechDBSlice";
import { configureStore } from "@reduxjs/toolkit";

/**
 * Redux store with the available reducers
 */
export const store = configureStore({
  reducer: {
    voiceState: voiceSlice,
    menuState: menuSlice,
    speechDBState: speechDBSlice,
  },
});
