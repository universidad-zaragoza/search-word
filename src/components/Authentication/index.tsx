/************************************************************************************************************
 *                                                                                                          *
 * File: AuthenticationView.tsx                                                                             *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: View with application's data loading progress                                               *
 * Version: 1.0                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./welcome.css";
import useAuthenticationController from "./useAuthenticationController";
import { levenshteinDistance } from "../../shared/utils/useLevenshteinDistance";

/**
 * View with application's progress
 *
 * @returns AuthenticationView
 */
const AuthenticationView: React.FC = () => {
  const { formData, handleUserIdChange, onSubmitHandler } =
    useAuthenticationController();

  return (
    <>
      <div className="container-fluid">
        <div className="container-menu-start-app-view">
          <div className="grid-container-start-app-view">
            <div className="item-logo-start-app-view">Buscar similitud</div>
            <Form onSubmit={onSubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identificador Usuario</Form.Label>
                <Form.Control
                  type="string"
                  placeholder="Introduzca un identificador válido del usuario"
                  value={formData.userId}
                  onChange={handleUserIdChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Acceder
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationView;
