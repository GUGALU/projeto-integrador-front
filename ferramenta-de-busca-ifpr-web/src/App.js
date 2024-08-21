import logo from "./logo.svg";
import "./App.css";
import { BackButton } from "./components/button/backButton";
import { Button } from '@mui/base/Button';


function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-2 w-10/12 bg-white mx-auto h-screen">
        <BackButton />
        <Button className="bg-red-600 h-10 w-10"/>
        <Button>
          Teste botão
        </Button>
      </div>
    </div>
  );
}

export default App;
