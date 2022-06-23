let firebaseConfig = {
        apiKey: "AIzaSyBVpFbaznIXkWMkKxsmhVnMG9ZwVgXxotc",
        authDomain: "thecubs-750cd.firebaseapp.com",
        projectId: "thecubs-750cd",
        storageBucket: "thecubs-750cd.appspot.com",
        messagingSenderId: "192537361428",
        appId: "1:192537361428:web:f093686ea194bbce88fb01"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();