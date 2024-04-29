import { useDispatch, useSelector } from "react-redux";
import {
  SpeechDBRootState,
  setUserDocRef,
  setUserId,
} from "../../shared/redux/slices/speechDBSlice";
import useFirebaseDBModel from "../../shared/hooks/useFirebaseDBModel";
import { useContext, useState } from "react";
import { AlexaContext } from "../../App";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.json";

interface FormState {
  userId: string;
}

const useAuthenticationController = () => {
  const [formData, setFormData] = useState<FormState>({
    userId: "",
  });

  const speechData = useSelector(
    (state: SpeechDBRootState) => state.speechDBState.speechData
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { createSpeechInFirebaseDB } = useFirebaseDBModel();

  const { printDebug } = useContext(AlexaContext);

  const handleUserIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setFormData({
      ...formData,
      userId: newValue,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let speechDataUpdated = { ...speechData };
    speechDataUpdated.userId = formData.userId;

    dispatch(setUserId(formData.userId));
    printDebug(`Usuario con nombre: ${formData.userId}`);

    await createSpeechInFirebaseDB(speechDataUpdated)
      .then((docRefId) => {
        printDebug(`Usuario agregado con docRefId: ${docRefId?.id}`);
        dispatch(setUserDocRef(docRefId));
        navigate(routes.MENU_ROUTE);
      })
      .catch((error) => {
        printDebug(`Error al agregar el nuevo usuario: ${error}`);
      });
  };

  return { formData, handleUserIdChange, onSubmitHandler };
};

export default useAuthenticationController;
