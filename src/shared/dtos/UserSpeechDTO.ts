/************************************************************************************************************
 *                                                                                                          *
 * File: VoiceDTO.tsx                                                                                       *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: properties of the message received from the voice API                                       *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { DocumentData, DocumentReference } from "firebase/firestore";

export interface SpeechDTO {
  userSpeech: string;
  algorithmAnswer: string;
}

export interface UserSpeechDTO {
  docRef?: DocumentReference<DocumentData, DocumentData> | null;
  userId: string;
  speechs: SpeechDTO[];
}
