const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieparser = require("cookie-parser");
// const formidableMiddleware = require("express-formidable");
const cors = require("cors");

const connectDB = require("./Config/database");
const authRoute = require("./Routes/authRoute");
const bookRoute = require("./Routes/bookingRoute");
const contactusRoute = require("./Routes/contactusRoute");

const app = express();
dotenv.config();

//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieparser());
// app.use(formidableMiddleware());

//routes
app.use("/slaywithus/", authRoute);
app.use("/slaywithus/booking", bookRoute);
app.use("/slaywithus/contactus", contactusRoute);

// port config
const port = process.env.PORT;
//const context = process.env.CONTEXT;

app.get("/slaywithus/server", (req, res) => res.send("Hello server!"));

app.listen(`${port}`, () => console.log(`Your app listening on port ${port}!`));
