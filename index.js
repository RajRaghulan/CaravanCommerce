// const productImage = document.getElementById("productImage");
// productImage.src = "https://cdn.shopify.com/s/files/1/2531/0730/products/vckn8039blk41282_800x_b1d0e54d-83da-4ba9-a641-f439078ab266.jpg?v=1600230631";
// const debug = require('debug')('firestore-snippets-node');
// const admin = require('firebase-admin');
// const serviceAccount = require("./serviceAccountKey.json");
// const data = require("./csvjson.json");
//     const collectionKey = "products"; //name of the collection

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://caravan-commerce-default-rtdb.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
// //Adding Data
// // if (data && (typeof data === "object")) {
// //    Object.keys(data).forEach(docKey => {
// //          firestore.collection("Stores").doc("BeyondActive").collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {  
// //             console.log("Document " + docKey + " successfully written!");
// //       }).catch((error) => {
// //          console.error("Error writing document: ", error);
// //       });
// //    });
// // }
// firestore.collection(collectionKey).orderBy("title","asc");
// const docRef = firestore.collection("Stores").doc("BeyondActive").collection("products").doc("0");
// docRef.get().then(function(doc){
//    if(doc && doc.exists){
//       const myData = doc.data();
//       console.log("i got here");
      
//       console.log(myData.Title);
//    }
// });
var productImage = document.getElementById("productImage");
productImage.src = "https://cdn.shopify.com/s/files/1/2531/0730/products/vckn8039blk41282_800x_b1d0e54d-83da-4ba9-a641-f439078ab266.jpg?v=1600230631";
