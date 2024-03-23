import "./App.css";
import { LoginPage } from "./components/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ProfilePage} from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* //keeping  path empty so that user will land to login page on login */}
        <Route path="" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
