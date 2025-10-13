import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import ShareFeeling from './pages/ShareFeeling'
import AllArticles from './pages/AllArticles'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-green-200">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/share-feeling" element={<ShareFeeling />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<AllArticles />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
