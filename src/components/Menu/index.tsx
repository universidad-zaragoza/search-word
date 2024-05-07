/************************************************************************************************************
 *                                                                                                          *
 * File: MenuView.tsx                                                                                       *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import Button from "../../shared/components/Button";
import "./welcome.css";

/**
 * View with application's progress
 *
 * @returns MenuView
 */
const MenuView: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-menu-start-app-view">
          <div className="grid-container-start-app-view">
            <div className="item-logo-start-app-view">Buscar similitud</div>
            <div className="item-button-start-app-view">
              <Button
                id="normal-words"
                path="/dialog"
                classStyle="btn-primary item-button"
                type="button"
              >
                Palabras y Refranes
              </Button>{" "}
              <Button
                id="phonetic-words"
                path="/dialog"
                classStyle="btn-primary item-button"
                type="button"
              >
                Palabras Fónetica
              </Button>
              <Button
                id="proverbs"
                path="/dialog"
                classStyle="btn-primary item-button"
                type="button"
              >
                Refranes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuView;
