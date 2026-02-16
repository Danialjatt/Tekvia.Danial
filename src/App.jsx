import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

import Pricing from './components/Pricing';
import ForClinics from './components/ForClinics';

function App() {
  const location = useLocation();
  const isAuthPage = ['/signup', '/login'].includes(location.pathname);

  return (
    <div className="app">
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/clinics" element={<ForClinics />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
