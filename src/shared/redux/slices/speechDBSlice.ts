/************************************************************************************************************
 *                                                                                                          *
 * File: speechDBSlice.tsx                                                                                  *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving user requests during a conversation                                *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DocumentData, DocumentReference } from "firebase/firestore";
import { SpeechDTO, UserSpeechDTO } from "../../dtos/UserSpeechDTO";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface SpeechDBRootState {
  speechDBState: {
    speechData: UserSpeechDTO;
  };
}

// Interface with the structure of the state to be stored
interface SpeechDBState {
  speechData: UserSpeechDTO;
}

// Initialization of state's variables
const initialState: SpeechDBState = {
  speechData: {
    docRef: null,
    userId: "",
    speechs: [],
  },
};

/**
 * Reducer with the available actions on the state
 */
export const speechDBSlice = createSlice({
  name: "speechDBState",
  initialState,
  reducers: {
    setUserDocRef: (
      state: SpeechDBState,
      action: PayloadAction<DocumentReference<
        DocumentData,
        DocumentData
      > | null>
    ) => {
      state.speechData.docRef = action.payload;
    },
    setUserId: (state: SpeechDBState, action: PayloadAction<string>) => {
      state.speechData.userId = action.payload;
    },
    addSpeech: (state: SpeechDBState, action: PayloadAction<SpeechDTO>) => {
      state.speechData.speechs.push(action.payload);
    },
  },
});

export const { setUserDocRef, setUserId, addSpeech } = speechDBSlice.actions;
export default speechDBSlice.reducer;
