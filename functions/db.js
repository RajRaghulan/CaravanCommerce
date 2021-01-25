const firebase = require("firebase-admin");

// Get a reference to the database service
const serviceAccount = require("./serviceAccountKey.json");
const cons = require("consolidate");
var config = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://caravan-commerce-default-rtdb.firebaseio.com"
};
const firebaseApp = firebase.initializeApp(config);
var database = firebaseApp.database();