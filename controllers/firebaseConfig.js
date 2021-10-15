if (process.env.NODE_RUN !== "production") {
  require("dotenv").config();
}

const env = process.env;

const firebaseConfig = {
    apiKey: "AIzaSyBVAkw39sn2FEqG1NiunuFWl96pXwDBKPk",
    authDomain: env.AUTH_DOMAIN,
    projectId: env.PROJECT_ID,
    storageBucket: env.STORAGE_BUCKET,
    messagingSenderId: env.MESSAGING_SENDERID,
    appId: env.APP_ID,
    measurementId: env.MEASUREMENT_ID
  };

  module.exports = firebaseConfig;