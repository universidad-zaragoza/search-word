/************************************************************************************************************
 *                                                                                                          *
 * File: useFirebaseDBModel.tsx                                                                             *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing the content of users from firebase firestore database         *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  DocumentData,
  DocumentReference,
  addDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
import { AlexaContext, FirebaseContext } from "../../App";
import { SpeechDTO, UserSpeechDTO } from "../dtos/UserSpeechDTO";
import { SpeechDBRootState } from "../redux/slices/speechDBSlice";

const useFirebaseDBModel = () => {
  /* Global Variables */
  const docRef = useSelector(
    (state: SpeechDBRootState) => state.speechDBState.speechData.docRef
  );

  /* App Context Data */
  const { getFirebaseDb } = useContext(FirebaseContext);
  const { printDebug } = useContext(AlexaContext);

  /**
   * Add a new user to the Firebase database
   *
   * @param _user
   */
  const createSpeechInFirebaseDB = async (
    _speechData: UserSpeechDTO
  ): Promise<DocumentReference<DocumentData, DocumentData> | null> => {
    let docRef: DocumentReference<DocumentData, DocumentData> | null = null;

    try {
      const db = await getFirebaseDb();

      if (db) {
        const usersCollection = collection(db, "users");
        docRef = await addDoc(usersCollection, _speechData);
      } else {
        throw new Error(
          `Failed adding new user to Firebase collection. DETAILS: Could not get database instance.`
        );
      }
    } catch (error) {
      throw new Error(
        `Failed adding new user to Firebase collection. DETAILS: ${error}`
      );
    }

    return docRef ? docRef : null;
  };

  /**
   * Add a new user to the Firebase database
   *
   * @param _user
   */
  const addSpeechToFirebaseDB = async (_speech: SpeechDTO) => {
    try {
      const db = await getFirebaseDb();

      if (db && docRef) {
        await updateDoc(docRef, {
          speechs: _speech,
        });
      } else {
        throw new Error(
          `Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: Could not get database instance.`
        );
      }
    } catch (error) {
      throw new Error(
        `Failed adding user answers to initial questionnaire to Firebase collection. DETAILS: ${error}`
      );
    }
  };

  return {
    createSpeechInFirebaseDB,
    addSpeechToFirebaseDB,
  };
};

export default useFirebaseDBModel;
