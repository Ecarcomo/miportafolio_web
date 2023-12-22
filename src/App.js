import './App.css';
import Navigation from "./routes/navigation"
import useConfig from "./hooks/useConfig"
import "./estilos/style.css"

function App() {
  const {mode,bg_color} = useConfig();
  return (
    <>
      <Navigation mode={mode} bg_color={bg_color}/>
    </>
  );
}

export default App;
