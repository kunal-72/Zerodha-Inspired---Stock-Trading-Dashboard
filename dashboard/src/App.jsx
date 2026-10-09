import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Home from './components/Home'
import { GeneralContextProvider } from './components/GeneralContext'

function App() {

  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get(
          "https://zerodha-backend-vq4p.onrender.com/api/users/me",
          {
            withCredentials: true
          }
        );


        console.log("User is logged in");
      } catch (error) {
        window.location.href =
          "https://zerodha-frontend-or4v.onrender.com/signup";
      } finally {
        setCheckingLogin(false);
      }
    };

    checkLogin();
  }, []);






  return (
    <>
      <GeneralContextProvider>
        <BrowserRouter>

          <Routes>

            <Route
              path='/*'
              element={<Home />}
            />

          </Routes>

        </BrowserRouter>
      </GeneralContextProvider >
    </>
  )
}

export default App