import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdhES1K_hPi3X_my_rc4tjEYnqG21DQQI",
  authDomain: "dtblog-1fbc8.firebaseapp.com",
  projectId: "dtblog-1fbc8",
  storageBucket: "dtblog-1fbc8.appspot.com",
  messagingSenderId: "1030178770931",
  appId: "1:1030178770931:web:d851a6c6a5c594e3be0c86",
  measurementId: "G-JWF7VJJ6G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firestore().settings({timestampsInSnapshots: true})

export default firebase;