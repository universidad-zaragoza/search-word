/************************************************************************************************************
 *                                                                                                          *
 * File: index.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Dialog View Components                                                                      *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { MAIN_IMAGES } from "../../shared/constants/images";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// Import Styles
import "./dialog.css";

// Import Components
import Button from "../../shared/components/Button";
import useDialogController from "./useDialogController";

/**
 * Generic view of a menu
 *
 * @param MenuProps
 * @returns MenuView
 */
const DialogView: React.FC = () => {
  /* View Controller */
  const { searchingText, isLoading, isSpeechOn, isSearching } =
    useDialogController();

  return (
    <>
      <div className="container-fluid">
        <div className="container-menu">
          <div className="grid-container">
            {isSpeechOn ? (
              <div className="grid-item item-avatar">
                <img
                  src={MAIN_IMAGES.avatarSpeakingIcon.imageSrc}
                  alt={MAIN_IMAGES.avatarSpeakingIcon.imageAlt}
                  className="d-inline-block align-center"
                />
              </div>
            ) : (
              <div className="grid-item item-avatar">
                <img
                  src={MAIN_IMAGES.avatarNotSpeakingIcon.imageSrc}
                  alt={MAIN_IMAGES.avatarNotSpeakingIcon.imageAlt}
                  className="d-inline-block align-center"
                />
              </div>
            )}
            <div className="grid-item item-input-wrapper-menu-view">
              {isLoading ? (
                <div className="grid-item item-icon-load-alexa-loading-view">
                  <img
                    src={MAIN_IMAGES.loadingIcon.imageSrc}
                    alt={MAIN_IMAGES.loadingIcon.imageAlt}
                    className="d-inline-block align-center"
                  />
                </div>
              ) : isSearching ? (
                <div className="grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation">
                  {searchingText}
                </div>
              ) : (
                <div className="grid-item item-waiting-text-alexa-loading-view">
                  {searchingText}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogView;
