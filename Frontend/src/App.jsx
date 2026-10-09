import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './landing_page/home/HomePage.jsx'
import About from "./landing_page/about/AboutPage.jsx"
import Authentication from "./landing_page/signUp/Authentication.jsx"
import Products from "./landing_page/products/ProductPage.jsx"
import Support from "./landing_page/support/SupportPage.jsx"
import Pricing from './landing_page/pricing/PricingPage.jsx'
import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'
import NotFound from './NotFound.jsx'
import { AuthProvider } from './landing_page/signUp/AuthContext.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Authentication />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/products' element={<Products />} />
            <Route path='/support' element={<Support />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter >
    </>
  )
}

export default App
