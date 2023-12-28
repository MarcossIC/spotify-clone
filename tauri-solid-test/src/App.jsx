import "./App.css";
import { Home } from "./presentation/pages";
import { RegisterCta } from "./presentation/components";
function App() {
  return (
    <div class="container">
      <Home />
      <RegisterCta />
    </div>
  );
}

export default App;
