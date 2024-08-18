import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAfn3OnDp4TeDjLB3YPBZGN55Cdj_cxOeE",
    authDomain: "aicustomersupportdb.firebaseapp.com",
    projectId: "aicustomersupportdb",
    storageBucket: "aicustomersupportdb.appspot.com",
    messagingSenderId: "649773749090",
    appId: "1:649773749090:web:798771662ef62238e7d23b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;