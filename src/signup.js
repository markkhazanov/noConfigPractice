firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('current-user').innerHTML = "Welcome, " + user.email;
    res.redirect('profile.html');
  } else {
    document.getElementById('current-user').innerHTML = "Sign in or sign up!";
  }
});

function signUp(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      document.getElementById('error').innerHTML = errorMessage;
  });
}

function signIn(){
  var email = document.getElementById("si-email").value;
  var password = document.getElementById("si-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  document.getElementById('si-error').innerHTML = errorMessage;
  });

}

function signOut(){
  firebase.auth().signOut().then(function() {
    //Sign out successful
  }, function(error) {
    //An error happened
  });
}