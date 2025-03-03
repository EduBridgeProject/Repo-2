import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/SignIn";
import Register from "./Pages/SignUp";
import BeneficiaryForm from "./Pages/BeneficiaryForm";
import ApprovedBeneficiaries from "./Pages/DonationPage";
// import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/BeneficiaryForm" element={<BeneficiaryForm />} />
        <Route path="/Donation" element={<ApprovedBeneficiaries />} />
      </Routes>
    </Router>
  );
}

export default App;