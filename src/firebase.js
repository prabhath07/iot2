import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-I8oDNENr2AUZc0CcpUZX0ZFxNtIPmgo",
  authDomain: "iot2-df0aa.firebaseapp.com",
  databaseURL: "https://iot2-df0aa-default-rtdb.firebaseio.com",
  projectId: "iot2-df0aa",
  storageBucket: "iot2-df0aa.appspot.com",
  messagingSenderId: "115392293398",
  appId: "1:115392293398:web:4d22e7e4960ecbd4bfa337",
  measurementId: "G-X8ZLQWE0J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getDatabase(app);
const data = ref(db,'Depth');
onValue(data, (snapshot) => {
  const d = snapshot.val();
});
export default data;