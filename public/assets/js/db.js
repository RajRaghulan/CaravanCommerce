const firebase = require("firebase/app");
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDss7Fwh_9AEW-C-H4yoaEZ3VDOloFLxZ8",
    authDomain: "caravan-commerce.firebaseapp.com",
    databaseURL: "https://caravan-commerce-default-rtdb.firebaseio.com",
    projectId: "caravan-commerce",
    storageBucket: "caravan-commerce.appspot.com",
    messagingSenderId: "1054138601545",
    appId: "1:1054138601545:web:5a5ece43e0df4998882f98",
    measurementId: "G-TYPGWT8JKR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Get All Products
function getProductList() {
    // Get All products Collection for BeyondActive
    db.collection("Stores").doc("BeyondActive").collection("products").onSnapshot((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderProducts(doc);
        });
    })
}

// Render Product List
function renderProducts(doc) {
    console.log(doc);
    const data = doc.data;
    return data;
}

