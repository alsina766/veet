if (!process.env.NODE_RUN !== "production") {
    require("dotenv").config();
}

const express = require("express");
const expressLayout = require("express-ejs-layouts");
const { initializeApp } = require("firebase/app");
const admin = require("firebase-admin");

//all relative imports
const FirebaseConfig = require("./controllers/firebaseConfig");
//routes
const mainRouter = require("./routes/main");

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayout);
app.use(express.static("public"));

//admin sdk
const serviceAccount = require("./veet-250f9-firebase-adminsdk-hbimb-b790dda492.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//initializing firebase
initializeApp(FirebaseConfig);

app.use("/", mainRouter);

app.listen(process.env.PORT||21876, () => {
    console.log("App listening on port " + process.env.PORT);
});
