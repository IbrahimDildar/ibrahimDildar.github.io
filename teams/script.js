// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgODvk9qDLsv7QL58q_zNJEbFbL1plRzM",
    authDomain: "team-reporter-854ae.firebaseapp.com",
    databaseURL: "https://team-reporter-854ae-default-rtdb.firebaseio.com",
    projectId: "team-reporter-854ae",
    storageBucket: "team-reporter-854ae.appspot.com",
    messagingSenderId: "463833165549",
    appId: "1:463833165549:web:0c184425323338ef2ba6e4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

let userName;

const signUp = () => {
     
    const email = document.getElementById("useremail").value;
    const password = document.getElementById("userpass").value;
    


    
    
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
                // ..
            });
   

}

auth.onAuthStateChanged((user) => {
    if (user) {
        
        location.href = "./main.html"
    } else {

    }
});

const logIn = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    // console.log(email.value, password.value);
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            alert("please put right email and password")
            // ...
            // ..
        });
}





