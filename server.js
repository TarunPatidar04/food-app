const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const ConnectionDb = require("./config/db");
const testRoute = require("./routes/testRoute");
const authRoute = require("./routes/authRoutes");
const userRoute = require("./routes/userRoutes");
const restaurantRoute = require("./routes/restaurantRoute");
const categoryRoute = require("./routes/categoryRoute");
const foodRoute = require("./routes/foodRoute");
const foodImageRoute = require("./routes/foodImageRoute");

//PORT
const PORT = process.env.PORT || 4001;

//rest object
const app = express();

//connect to db
ConnectionDb();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//route
//URL=>http://localhost/:8080
app.use("/api/v1/test", testRoute);

//auth route
app.use("/api/v1/auth", authRoute);

//user route
app.use("/api/v1/user", userRoute);

//restaurant route
app.use("/api/v1/restaurant", restaurantRoute);

//category route
app.use("/api/v1/category", categoryRoute);

//food route
app.use("/api/v1/food", foodRoute);

//food Image route
app.use("/api/v1/image", foodImageRoute);

app.get("/", (req, res) => {
  res.status(201).send("<h1>Welcome to Food Server</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
