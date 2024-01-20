import { BrowserRouter, Route, Routes ,Navigate} from "react-router-dom";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../screens/Home";
/**
 * @since v1.0
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @param {string} mode variable global REDUX para Dark/Light Mode 
 * @param {string} bg_color variable global REDUX para color de letra 
 * @param {string} language variable global REDUX de idioma 
 * @return {Home} Home
 * @description Componente de estructura de enrutamiento de la app
 */
const Navigation = ({mode,bg_color,language}) => {
        return (
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<WithNavbar language={language}/>}>
                      <Route index element={<Home  mode={mode} bg_color={bg_color} language={language}/>} />
                    </Route>
/** En caso de ruteo erroneo , la app redirecciona a la pagina principal */
                    <Route path="*" element={<Navigate to="/" />} />
                  </Routes>
                </BrowserRouter>
              );
};

export default Navigation;