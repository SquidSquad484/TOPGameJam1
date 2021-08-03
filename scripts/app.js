// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCUBRai-BdPP7cR2g-oPAwDsLDWU3tyCHc",
    authDomain: "space-scramble.firebaseapp.com",
    projectId: "space-scramble",
    storageBucket: "space-scramble.appspot.com",
    messagingSenderId: "176688493791",
    appId: "1:176688493791:web:417e3b3c1d4497ca4d256a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

function register_acc() {
    // Get all our input fields
    document.getElementById("nameError").style.display="none";
    document.getElementById("usernameError").style.display="none";
    document.getElementById("emailError").style.display="none";
    document.getElementById("passwordError").style.display="none";
    document.getElementById("emailUseError").style.display="none";

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let full_name = document.getElementById('full_name').value
    let username = document.getElementById('username').value

    let exit = false;
    // Validate input fields
    if (validate_field(full_name) == false) {
        document.getElementById("nameError").style.display="block";
        exit = true;
    }
    if (validate_field(username) == false) {
        document.getElementById("usernameError").style.display="block";
        exit = true;
    }
    if (validate_email(email) == false) {
        document.getElementById("emailError").style.display="block";
        exit = true;
    }
    if (validate_password(password) == false) {
        document.getElementById("passwordError").style.display="block";
        exit = true;
    }
    if (exit == true) {
        return
    }
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        let user = auth.currentUser

        // Add this user to Firebase Database
        let database_ref = database.ref()

        // Create User data
        let user_data = {
        email : email,
        full_name : full_name,
        username : username,
        last_login : Date.now()
        }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)

        // DOne
        document.getElementById("loggedinsuccess").style.display = "block";
        window.location.reload();
    })
    .catch(function() {
        document.getElementById("emailUseError").style.display="block";
    });
}

// Set up our login function
function login () {
    // Get all our input fields
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        let user = auth.currentUser

        // Add this user to Firebase Database
        let database_ref = database.ref()

        // Create User data
        let user_data = {
        last_login : Date.now()
        }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)

        // Done
        document.getElementById("loggedinsuccess").style.display = "block";
        window.location.reload();
    })
    .catch(function() {
            if (document.getElementById("incorrectInfo").style.display == "none") {
                document.getElementById("incorrectInfo").style.display="block";
                document.getElementById("incorrectInfo2").style.display="none";
            } else {
                document.getElementById("incorrectInfo2").style.display="block";
                document.getElementById("incorrectInfo").style.display="none";
            }
            return
        }
    );
}

// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}

function signout_button() {
    auth.signOut();
    document.getElementById("loggedinsuccess").style.display = "none";
}

// Realtime listener to check if user is logged in
auth.onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
        document.getElementById("headeright").innerHTML = "Sign Out";
        document.getElementById("headeright").onclick = signout_button;
    }
    else {
        document.getElementById("headeright").innerHTML = "Login | Sign Up";
        document.getElementById("headeright").onclick = logindisplay;
    }
})

