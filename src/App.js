import './App.css';
import Navigation from "./routes/navigation"
import useConfig from "./hooks/useConfig"
import "./estilos/style.css"

function App() {
  const {mode,bg_color,language} = useConfig();
  return (
    <>
      <Navigation  mode={mode} bg_color={bg_color} language={language}/>
    </>
  );
}

export default App;
