/************************************************************************************************************
 *                                                                                                          *
 * File: menuSlice.tsx                                                                                      *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for global storage of the voice API data                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface MenuRootState {
  menuState: {
    menuOption: string;
  };
}

// Interface with the structure of the state to be stored
interface MenuState {
  menuOption: string;
}

// Initialization of state's variables
const initialState: MenuState = {
  menuOption: "",
};

/**
 * Reducer with the available actions on the state
 */
export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setMenuOption: (state: MenuState, action: PayloadAction<string>) => {
      state.menuOption = action.payload;
    },
  },
});

export const { setMenuOption } = menuSlice.actions;
export default menuSlice.reducer;
