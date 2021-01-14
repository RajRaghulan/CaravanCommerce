const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
const data = require("./csvjson.json");
const collectionKey = "products"; //name of the collection
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://caravan-commerce-default-rtdb.firebaseio.com"
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
   Object.keys(data).forEach(docKey => {
         firestore.collection("Stores").doc("BeyondActive").collection(collectionKey).doc(docKey).set(data[docKey]).then((res) => {  
            console.log("Document " + docKey + " successfully written!");
      }).catch((error) => {
         console.error("Error writing document: ", error);
      });
   });
}
firestore.collection(collectionKey).orderBy("title","asc");

// Object.keys(data).forEach(docKey => {
//    const doc = firestore.collection('Stores').doc('BeyondActive').collection(collectionKey).doc(docKey).get();
//    if (!doc.exists) {
//    console.log('No such document!');
//    } else {
//    console.log('Document data:', doc.data());
//    }
// });

async function getDocument(db) {
  // [START get_document]
  // [START firestore_data_get_as_map]
  const storeRef = db.collection('Stores').doc('BeyondActive').collection("products").doc("0");
  const doc = await storeRef.ref('/Title/').once;
  if (!doc.exists) {
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }
  // [END firestore_data_get_as_map]
  // [END get_document]
}
return getDocument(firestore);  



