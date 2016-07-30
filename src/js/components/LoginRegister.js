import React, { Component } from 'react';

class LoginRegister extends Component {

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-up-form">
          <h1>Sign Up </h1>
          <input type="text" placeholder="email" id="email"/>
          <input type="password" placeholder="password" id="password"/>
          <button onClick={()=>signUp()}>Submit</button>
          <p id="error"></p>
        </div>

        <div className="Sign-in-form">
          <h1>Sign In </h1>
          <input type="text" placeholder="email" id="si-email"/>
          <input type="password" placeholder="password" id="si-password"/>
          <button onClick={()=>signIn()}>Submit</button>
          <p id="si-error"></p>
        </div>

        <div><button onClick={()=>signOut()}>Sign out</button></div>
      </div>
    );
  }
}

export default LoginRegister;

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