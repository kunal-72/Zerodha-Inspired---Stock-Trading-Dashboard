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

        // Backend se check karenge
        // ki user ke paas valid JWT cookie hai ya nahi
        await axios.get(
          "http://localhost:5500/api/users/me",
          {
            withCredentials: true
          }
        );

        // Agar request successful hai
        // to user logged in hai
        console.log("User is logged in");
        setCheckingLogin(false);

      } catch (error) {

        // Agar JWT nahi hai ya invalid hai
        // to main frontend ke signup page par bhej do
        window.location.href = "http://localhost:5173/signup";
      }
    };

    checkLogin();

  }, []);



  // // Jab tak login check ho raha hai
  // if (checkingLogin) {
  //   return <h2>Checking login...</h2>;
  // }


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