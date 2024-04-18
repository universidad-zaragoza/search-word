/************************************************************************************************************
 *                                                                                                          *
 * File: useDialogController.tsx                                                                            *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing Dialog view                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  resetUserSpeechData,
} from "../../shared/redux/slices/voiceSlice";
import { AlexaContext } from "../../App";
import { VoiceAPIStatus } from "../../shared/enums/VoiceAPIStatus";
import { VoiceMsgStatus } from "../../shared/enums/VoiceMsgStatus";
import useSpeechResponse from "./hooks/useSpeechResponse";
import { spanish_words } from "@arvidbt/spanish-words";
import { WordLib } from "@arvidbt/wordlib";
import { levenshteinDistance } from "../../shared/utils/useLevenshteinDistance";

const useDialogController = () => {
  // CONSTANS
  const START_SPEECH = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          ¡Hola! Mi nombre es Alexa. Díme una palabra </amazon:emotion><break strength='strong'/></voice>`;

  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [isSearchingWord, setIsSearchingWord] = useState<boolean>(false);
  const [esWordsState, setEsWordsState] = useState(new WordLib(spanish_words)); // Listado que contiene 636598 palabras en español
  const [wordToSearch, setWordToSearch] = useState<string>("");
  const [searchingText, setSearchingText] = useState<string>(
    "Esperando palabra..."
  );

  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const voiceMsgProps = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceMsgProps
  );
  const processingUserRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.processingUserRequest
  );
  const intentType = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.intentType
  );
  const userRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.userRequest
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { speechResponseToUserRequest } = useSpeechResponse();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  /**
   * Shows the loading icon at app first start or every time the user sends a request
   */
  const showLoadingIcon = useCallback(() => {
    printDebug(`+++ INSIDE loading() - voiceAPIStatus => ${voiceAPIStatus}`);
    printDebug(
      `+++ INSIDE loading() - voiceMsgStatus => ${voiceMsgProps.status}`
    );

    if (voiceAPIStatus === VoiceAPIStatus.LOADING || processingUserRequest) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [voiceAPIStatus, voiceMsgProps]);

  const setIsSpeaking = useCallback(() => {
    if (voiceMsgProps.status === VoiceMsgStatus.START_SPEECH) {
      setIsSpeechOn(true);
    } else {
      setIsSpeechOn(false);
    }
  }, [voiceMsgProps]);

  const sayStartSpeech = useCallback(() => {
    speechResponseToUserRequest(START_SPEECH);
  }, [voiceAPIStatus]);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    if (intentType === "word-intent") {
      setWordToSearch(userRequest.toUpperCase());
      setSearchingText("Palabra recibida. Buscando...");
      setIsSearchingWord(true);
      searchWord(userRequest);
      setIsSearchingWord(false);
    }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

  const searchWord = (_word: string) => {
    const spanishDictionaryWords = esWordsState.getDictionaryWords();

    spanishDictionaryWords.map((spanishWord) => {
      const lvn = levenshteinDistance(
        spanishWord.toLowerCase(),
        _word.toLowerCase()
      );

      if (lvn >= 0.8) {
        console.log(
          `LVN DISTANCE between ${spanishWord} and ${_word} is ${lvn}`
        );
        printDebug(
          `LVN DISTANCE between ${spanishWord} and ${_word} is ${lvn}`
        );
      }

      setSearchingText(
        `La palabra que he entendido es ${_word} y la palabra que he encontrado en el diccionario es ${spanishWord}`
      );
    });
  };

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    showLoadingIcon();
  }, [showLoadingIcon]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the sayStartSpeech function are modified
   */
  useEffect(() => {
    sayStartSpeech();
  }, [sayStartSpeech]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the sayStartSpeech function are modified
   */
  useEffect(() => {
    setIsSpeaking();
  }, [setIsSpeaking]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the handleVoiceAPIRequests function are modified
   */
  useEffect(() => {
    handleVoiceAPIIntents();
  }, [handleVoiceAPIIntents]);

  return { searchingText, isLoading, isSpeechOn };
};

export default useDialogController;
