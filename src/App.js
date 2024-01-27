
import './App.css';
import "./estilos/style.css"

import Navigation from "./routes/navigation"
import useConfig from "./hooks/useConfig"


/**
 * @since v1.0
 * @author @emmanuel_carcomo <emmanuelcarcomo@gmail.com> 
 * @return  {Navigation}  Componente de ruteo
 * @description Inicializacion de configuracion y ruteo de APP
 */
function App() {
  const {mode,bg_color,language} = useConfig();
  return (
    <>
      <Navigation  mode={mode} bg_color={bg_color} language={language}/>
    </>
  );
}

export default App;
