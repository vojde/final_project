import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, set, get, ref, child } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyClNTo4BAo-n6UIdMuz5k1eY6O1n7-QeDI",
    authDomain: "anna-78926.firebaseapp.com",
    databaseURL: "https://anna-78926-default-rtdb.firebaseio.com",
    projectId: "anna-78926",
    storageBucket: "anna-78926.appspot.com",
    messagingSenderId: "961700455129",
    appId: "1:961700455129:web:513560a9167da6739554c8",
    measurementId: "G-DYT4HQSWZN"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function firebaseSet(data) {
    set(ref(db, 'data/site'), data);
};
export function firebaseLoad() {
    return get(child(ref(db), 'data/site')).then((snapshot) => {
        return snapshot.val();
    });
};
