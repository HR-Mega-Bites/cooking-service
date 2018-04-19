import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
<<<<<<< HEAD
    super();
=======
    super(props);
>>>>>>> 3a0dd46f44af1c313e8ede3fdf06f19c08dfde20
    this.state = {
      recipe: []
    };
    this.getRecipe = this.getRecipe.bind(this)
  };
  getRecipe() {
<<<<<<< HEAD
    Axios.get('http://127.0.0.1:3300/recipe')
    .then((res) => {
      this.setState({
        recipe: res.data.recipe
      });
    })
    // .then(console.log('resonse is here', response))
    console.log('i was clicked')
=======
    Axios.get('http://127.0.0.1:3100/recipe')
    .then((res) => {
      console.log('this is the response', res.data);
    })

>>>>>>> 3a0dd46f44af1c313e8ede3fdf06f19c08dfde20
  }
  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <h2>good boy</h2>
        <button onClick={this.getRecipe}>click me</button>
<<<<<<< HEAD

=======
>>>>>>> 3a0dd46f44af1c313e8ede3fdf06f19c08dfde20
      </div>
    )
  }
}
export default App;
