import './App.css';
import Navigation from "./routes/navigation"
import useConfig from "./hooks/useConfig"
import "./estilos/style.css"

function App() {
  const {mode} = useConfig();
  return (
    <>
      <Navigation mode={mode} />
    </>
  );
}

export default App;
