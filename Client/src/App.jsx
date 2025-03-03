import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PaymentPage from "./Pages/PaymentPage";
import DonationPage from "./Pages/DonationPage";
import DonateDashboard from "./Pages/DonateDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import UserProfile from "./Pages/UserProfile";
import SuccessStory from "./Pages/SuccessStoriesCards"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScholarshipTerms from "./Pages/ScholarshipTerms";

function App() {
  return (
  
    <Router>

     <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/dashboard/donate" element={<DonateDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/SuccessStoriesCards" element={<SuccessStory />} />
        <Route path="/Scholarshipterms" element={<ScholarshipTerms />} />
        </Routes>
      <Footer />

    </Router>
  );
}


export default App;
