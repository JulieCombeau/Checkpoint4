import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Register from "./pages/Register";
import LoginForm from "./pages/LoginForm";
import AdministratorDashboard from "./pages/AdministratorDashboard";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/détails/:gameId" element={<GameDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/dashboardAdministrator"
          element={<AdministratorDashboard />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
