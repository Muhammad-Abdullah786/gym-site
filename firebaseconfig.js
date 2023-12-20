
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref, get, child, onChildAdded, push } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getStorage, ref as Sref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGlqmlFql5i40IkTew3jXxF2eTr0KykAs",
  authDomain: "add-product-51800.firebaseapp.com",
  projectId: "add-product-51800",
  storageBucket: "add-product-51800.appspot.com",
  messagingSenderId: "116440001796",
  appId: "1:116440001796:web:b76dc397e730b3fd0b7451",
  measurementId: "G-3ZDFC5QJC9"
};
  const app = initializeApp(firebaseConfig);
  const db = getDatabase()
 
  export {
      app,
      db,
      child,
      set,
      ref,
      get,
      getStorage,
      uploadBytesResumable,
      Sref,
      getDownloadURL,
      onChildAdded,
      push,
  
  }
  