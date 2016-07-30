import React, { Component } from 'react';

class LoginRegister extends Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged(function(user) {

      console.log('user signed in:', user.uid);
    });
  }

  signUp(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
    });
  }
  signIn(){
    var email = document.getElementById("si-email").value;
    var password = document.getElementById("si-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    });

  }
  signOut(){
    firebase.auth().signOut().then(function() {
      //Sign out successful
    }, function(error) {
      //An error happened
    });
  }

  render() {
    return (
      <div className="LoginRegister">
        <div className="Sign-up-form">
          <h1>Sign Up </h1>
          <input type="text" placeholder="email" id="email"/>
          <br/>
          <input type="password" placeholder="password" id="password"/>
          <br/>
          <button onClick={()=>this.signUp()}>Submit</button>
          <p id="error"></p>
        </div>

        <div className="Sign-in-form">
          <h1>Sign In </h1>
          <input type="text" placeholder="email" id="si-email"/>
          <br/>
          <input type="password" placeholder="password" id="si-password"/>
          <br/>
          <button onClick={()=>this.signIn()}>Submit</button>
          <p id="si-error"></p>
        </div>

        <div><button onClick={()=>this.signOut()}>Sign out</button></div>
      </div>
    );
  }
}

export default LoginRegister;



// function signUp(){
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       document.getElementById('error').innerHTML = errorMessage;
//   });
// }
//
// function signIn(){
//   var email = document.getElementById("si-email").value;
//   var password = document.getElementById("si-password").value;
//
//   firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   document.getElementById('si-error').innerHTML = errorMessage;
//   });
//
// }
//
// function signOut(){
//   firebase.auth().signOut().then(function() {
//     //Sign out successful
//   }, function(error) {
//     //An error happened
//   });
// }
