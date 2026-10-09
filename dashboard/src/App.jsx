
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from './components/Home';
import { GeneralContextProvider } from './components/GeneralContext';

function App() {
  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        // Backend se check karo ki user logged in hai ya nahi
        await axios.get(
          "https://zerodha-backend-vq4p.onrender.com/api/users/me",
          { withCredentials: true }
        );

        console.log("User is logged in");
      } catch (error) {
        // Login nahi hai toh signup page par bhejo
        window.location.replace(
          "https://zerodha-frontend-or4v.onrender.com/signup"
        );
      } finally {
        setCheckingLogin(false);
      }
    };

    checkLogin();
  }, []);

  // Jab tak login check ho raha hai, dashboard mat dikhao
  if (checkingLogin) {
    return <h2>Checking login...</h2>;
  }

  return (
    <GeneralContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GeneralContextProvider>
  );
}

export default App;

