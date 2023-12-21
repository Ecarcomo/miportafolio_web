import logo from './logo.svg';
import './App.css';
import Navigation from "./routes/navigation"
import useConfig from "./hooks/useConfig"

function App() {
  const {mode} = useConfig();
  return (
    <>
      <Navigation mode={mode} />
    </>
  );
}

export default App;
