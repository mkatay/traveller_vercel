//import "./App.css";
import { Background } from "./components/Background2";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="content">
      <div>
        <Background />
        <Menu />
      </div>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
