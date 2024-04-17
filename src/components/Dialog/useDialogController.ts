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

const useDialogController = () => {
  // CONSTANS
  const START_SPEECH = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          ¡Hola! Mi nombre es Alexa. ¿Cuál es tu nombre? </amazon:emotion><break strength='strong'/></voice>`;

  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");

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

    if (intentType === "set-name-intent") {
      setUserName(userRequest);
      speechResponseToUserRequest(
        `¡Encantada de conocerte ${userRequest}! ¿Qué es lo que te gustaría decirme?`
      );
    } else if (intentType === "feel-alone-intent") {
      speechResponseToUserRequest(
        `Lamento saber que te estás sintiendo sola ${userName}. ¿Por qué te sientes sola?`
      );
    } else if (intentType === "why-feel-alone-intent") {
      speechResponseToUserRequest(
        `Se me ocurre que podrías salir a la calle a hacer los mandados que tienes pendiente, o salir a dar un paseo por el parque más cercano. 
         También podrías ir a una cafetería o a un centro social y sentarte a hablar con alguien allí. 
         ¿Quieres que te recomiende alguna cafetería o sitio que podrías visitar?`
      );
    } else if (intentType === "yes-intent") {
      speechResponseToUserRequest(
        `¡Genial! Me alegro de que te haya gustado la idea. Antes de ofrecerte mis recomendaciones necesito que me digas cuál es la ciudad en la que vives`
      );
    } else if (intentType === "city-intent") {
      speechResponseToUserRequest(
        `Podrías ir a la cafetería Muñoz, que tiene muy buenas valoraciones. 
         Después, si te apetece, te propongo pasear tranquilamente por el Parque de los Fueros. 
         Espero que mis recomendaciones te sirvan y no olvides contarme qué tal la experiencia al volver. ¡Hasta pronto!`
      );
    }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

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

  return { isLoading, isSpeechOn };
};

export default useDialogController;
