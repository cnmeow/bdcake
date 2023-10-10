import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyApp1U3mCbXoWkxOlyWxGrFc6KtCK3Rczc",
    authDomain: "birthdayonline.firebaseapp.com",
    databaseURL: "https://birthdayonline-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "birthdayonline",
    storageBucket: "birthdayonline.appspot.com",
    messagingSenderId: "967800040368",
    appId: "1:967800040368:web:11863466e5904fa8154475",
    measurementId: "G-Q7S3ECGMZF"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function sendData(username, age, wishes) {
    push(ref(db, 'users'), { username: username, age: age, wish: wishes })
        .then(() => {
            console.log(age);
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
document.getElementById("btnWish").addEventListener("click", () => {
    const username = localStorage.getItem('bdonlineName');
    const age = localStorage.getItem('bdonlineAge');
    const wishes = document.getElementById("wishContent").value;
    sendData(username, age, wishes);
});
