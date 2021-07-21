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
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    username = document.getElementById('username').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(username) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
    }
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
        email : email,
        full_name : full_name,
        username : username,
        last_login : Date.now()
        }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)

        // DOne
        alert('User Created!!')
    })
    .catch(e => console.log(e.message));
}

// Set up our login function
function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
        // Declare user variable
        var user = auth.currentUser

        // Add this user to Firebase Database
        var database_ref = database.ref()

        // Create User data
        var user_data = {
        last_login : Date.now()
        }

        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)

        // DOne
        alert('User Logged In!!')

    })
    .catch(e => console.log(e.message));
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





