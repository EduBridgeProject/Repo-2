// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// // Routes
// const adminRoutes = require("./routes/adminRoutes");
// const userRoutes = require("./routes/userRoutes");
// const contactMessagesRoutes = require("./routes/contactMessagesRoutes");
// const donorRoutes = require("./routes/donorRoutes");
// const successStoryRoutes = require("./routes/successStoryRoutes");

// dotenv.config();

// const app = express();

// // CORS Configuration to allow React app (running on port 3000) to access the API
// app.use(cors({ origin: 'http://localhost:4000' })); 
// app.use(express.json()); // This middleware should come before defining routes

// // Defining routes
// app.use("/api", adminRoutes);
// app.use("/api", userRoutes);
// app.use("/api", contactMessagesRoutes);
// app.use("/api/donors", donorRoutes);
// app.use("/api/success-stories", successStoryRoutes);

// // Start the server
// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const { sequelize } = require("./models");
const cookieParser = require("cookie-parser");

// Routes
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const contactMessagesRoutes = require("./routes/contactMessagesRoutes");
const donorRoutes = require("./routes/donorRoutes");
const beneficiaryRoutes = require("./routes/beneficiaryRoutes");


dotenv.config();

const app = express();
app.use(cookieParser());

app.use(cors());
app.use(express.json());
// إعداد الـ Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// إعداد مسار لتخزين الملفات
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", adminRoutes);
app.use("/api", userRoutes);
app.use("/api", contactMessagesRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/case", beneficiaryRoutes);


// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
