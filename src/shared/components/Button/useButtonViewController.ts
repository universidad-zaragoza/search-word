/************************************************************************************************************
 *                                                                                                          *
 * File: useButtonViewController.tsx                                                                        *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing ButtonView                                                    *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMenuOption } from "../../redux/slices/menuSlice";

const useButtonViewController = () => {
  /* React Hooks */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Moves on to the component associated to the path passed as a parameter
   *
   * @param _path
   */
  const onClickNavigateToPath = (_path: string, id: string) => {
    dispatch(setMenuOption(id));
    navigate(_path);
  };

  return { onClickNavigateToPath };
};

export default useButtonViewController;
