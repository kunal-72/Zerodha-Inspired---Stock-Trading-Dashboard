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
          "http://localhost:5500/api/users/me",
          {
            withCredentials: true
          }
        );

        
        console.log("User is logged in");
        setCheckingLogin(false);

      } catch (error) {

      
        window.location.href = "http://localhost:5173/signup";
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