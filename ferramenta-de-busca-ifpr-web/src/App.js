import logo from "./logo.svg";
import "./App.css";
import { BackButton } from "./components/button/backButton";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-2 w-10/12 bg-white mx-auto h-screen">
        <BackButton />
      </div>
    </div>
  );
}

export default App;
