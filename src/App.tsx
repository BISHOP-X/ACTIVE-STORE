import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import DashboardLayout from './components/DashboardLayout'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import MyOrders from './pages/MyOrders'
import AddFunds from './pages/AddFunds'
import Profile from './pages/Profile'
import Rules from './pages/Rules'
import CustomerCare from './pages/CustomerCare'
import { useTheme } from './hooks/useTheme'

function LandingPage({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <>
      <Navbar dark={dark} toggleTheme={toggle} />
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  )
}

function App() {
  const { dark, toggle } = useTheme()

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased transition-colors duration-300">
        <Routes>
          <Route path="/" element={<LandingPage dark={dark} toggle={toggle} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="funds" element={<AddFunds />} />
            <Route path="profile" element={<Profile />} />
            <Route path="rules" element={<Rules />} />
            <Route path="support" element={<CustomerCare />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
