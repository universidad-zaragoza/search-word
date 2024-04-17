import { useContext } from "react";
import { AlexaContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  setProcessingUserRequest,
} from "../../../shared/redux/slices/voiceSlice";

const useSpeechResponse = () => {
  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );

  // Custom and React Hooks
  const dispatch = useDispatch();

  // App Context Data
  const { printDebug, sendTextToAlexa } = useContext(AlexaContext);

  const speechResponseToUserRequest = async (_response: string) => {
    const formatedResponse = formattingAlexaResponse(_response);
    await sendTextToAlexa(voiceAPIStatus, formatedResponse);
    dispatch(setProcessingUserRequest(false));
  };

  const formattingAlexaResponse = (_response: string) => {
    let formatedResponse = `<voice name='Lucia'>`;
    formatedResponse += _response;
    formatedResponse += `</voice>`;

    return formatedResponse;
  };

  return {
    speechResponseToUserRequest,
  };
};

export default useSpeechResponse;
