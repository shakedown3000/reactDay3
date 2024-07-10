import { useState } from "react";
import "./App.css";
import Form from "./components/forms/Forms";
import Counter from "./components/Counter/Counter";
import FAQ from "./components/FAQ/FAQ";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <main className={`${darkMode && "dark"}`}>
      <div className="darkmodediv">
        <button onClick={() => setDarkMode((darkMode) => !darkMode)}>
          Change mode 🌚🌝
        </button>
      </div>
      <Form />
      <Counter />
      <FAQ />
    </main>
  );
}

export default App;
