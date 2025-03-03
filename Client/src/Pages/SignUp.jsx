import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "donor",
    status: "pending",
    phoneNumber: "",
    address: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/register", formData);
      alert("Registration successful! Please login.");
      navigate("/SignIn");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <input type="text" name="firstName" placeholder="First Name" className="w-full p-2 border rounded"
            value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" className="w-full p-2 border rounded"
            value={formData.lastName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded"
            value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded"
            value={formData.password} onChange={handleChange} required />
          <input type="text" name="phoneNumber" placeholder="Phone Number" className="w-full p-2 border rounded"
            value={formData.phoneNumber} onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" className="w-full p-2 border rounded"
            value={formData.address} onChange={handleChange} />
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Register
          </button>
        </form>
        <p className="mt-4 text-center">Already have an account? <a href="/signin" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
