import React, { Component } from 'react';

class Comments extends Component {
  mixins: [ReactFireMixin]

  getInitialState(){
    return {
      comments: [],
    }
  }

  componentWillMount() {
    // create/reference firebase db "comments"
    var ref = firebase.database().ref("comments/");
    // bind contents of db to state "comments"
    this.bindAsArray(ref, "comments");
  }

  // add visitor to list of comments
  addComment(){
    var newComment = this.refs.inputText.value;
    this.firebaseRefs["comments"].push({
      comment: newComment
    });

    // clear input text
    this.refs.inputText.value = "";
  }

  handleKeyPress(e) {
    if(e.key == "Enter"){
      this.addComment();
    }
  }

  deleteComment(object){ // function that deletes a visitor when you click it
    console.log(object);
    this.firebaseRefs["comments"].child(object['.key']).remove(function(error) {
      if (error) {
        console.log(error);
      }
    });
  }
  
  render(){
    return(
      <div id="react-container">
        <h1>comments</h1>
        {this.state.comments.map(function(object, i){
          return (
            <p key={i} onClick={()=>this.deleteComment(object)}>{object.comment}</p>
          )
        }, this)}
        <input
          type="text"
          placeholder="add your name"
          ref="inputText"
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}

export default Comments
// ReactDOM.render(
//   <ReactClass/>,
//   document.getElementById('react-root')
// );