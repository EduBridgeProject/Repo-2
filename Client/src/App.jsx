import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ContactUS from "./Pages/ContactUS";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PaymentPage from "./Pages/PaymentPage";
import DonationPage from "./Pages/DonationPage";
import DonateDashboard from "./Pages/DonateDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import BeneficiaryForm from "./Pages/BeneficiaryForm";
import UserProfile from "./Pages/UserProfile";
import SuccessStory from "./Pages/SuccessStoriesCards";
import DetailsPage from "./Pages/DetailsPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScholarshipTerms from "./Pages/ScholarshipTerms";

function Layout() {
  const location = useLocation();
  const hideNavbarFooterPaths = ["/signin", "/signUp", "/dashboard/admin"]; // الصفحات التي نريد إخفاء الـ Navbar والـ Footer فيها

  return (
    <>
      {!hideNavbarFooterPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/BeneficiaryForm" element={<BeneficiaryForm />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/dashboard/donate" element={<DonateDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/Detailspage/:id" element={<DetailsPage />} />
        <Route path="/SuccessStoriesCards" element={<SuccessStory />} />
        <Route path="/Scholarshipterms" element={<ScholarshipTerms />} />
      </Routes>
      {!hideNavbarFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./Pages/HomePage";
// import AboutUs from "./Pages/AboutUs";
// import ContactUS from "./Pages/ContactUS";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
// import PaymentPage from "./Pages/PaymentPage";
// import DonationPage from "./Pages/DonationPage";
// import DonateDashboard from "./Pages/DonateDashboard";
// import AdminDashboard from "./Pages/AdminDashboard";
// import UserProfile from "./Pages/UserProfile";
// import SuccessStory from "./Pages/SuccessStoriesCards"; 
// import ScholarshipTerms from "./Pages/ScholarshipTerms";

// function Layout() {
//   const location = useLocation();

//   // الصفحات التي لا يجب أن يظهر فيها الـ Navbar والـ Footer
//   const hideNavbarFooterPages = ["/signin", "/signup", "/dashboard/donate", "/dashboard/admin"];

//   return (
//     <>
//       {/* إظهار Navbar فقط في الصفحات المسموح بها */}
//       {!hideNavbarFooterPages.includes(location.pathname) && <Navbar />}
      
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<ContactUS />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/payment" element={<PaymentPage />} />
//         <Route path="/donate" element={<DonationPage />} />
//         <Route path="/dashboard/donate" element={<DonateDashboard />} />
//         <Route path="/dashboard/admin" element={<AdminDashboard />} />
//         <Route path="/profile" element={<UserProfile />} />
//         <Route path="/SuccessStoriesCards" element={<SuccessStory />} />
//         <Route path="/Scholarshipterms" element={<ScholarshipTerms />} />
//       </Routes>

//       {/* إظهار Footer فقط في الصفحات المسموح بها */}
//       {!hideNavbarFooterPages.includes(location.pathname) && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Layout />
//     </Router>
//   );
// }

// export default App;
