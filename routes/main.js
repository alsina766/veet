const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require("firebase/auth");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//get routes
router.get("/", (req, res) => {
    res.render("homePage");
});

router.get("/register", (req, res) => {
    res.render("accounts/signUp");
});

router.get("/login", (req, res) => {
    res.render("accounts/signIn");
});

router.get("/stores", (req, res) => {
    res.render("components/explore");
});

//post routes
router.post("/register", urlencodedParser, (req, res) => {
    console.log(req.body);

    const email = req.body.email;
    const password = req.body.password;

    res.json({
        status: "success",
        email: email,
        password: password
    });

    //firebase authentication
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
});

router.post("/login", urlencodedParser, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    //login authentication for firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
    });
});

module.exports = router;