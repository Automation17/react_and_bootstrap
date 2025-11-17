import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from './pages/Header';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import Features from './pages/Features';
import Enterprise from './pages/Enterprise';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Pricing/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='enterprise' element={<Enterprise/>}/>
          <Route path='features' element={<Features/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
