import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      recipe: []
    };
    this.getRecipe = this.getRecipe.bind(this);
  };

  getRecipe() {
    Axios.get('http://127.0.0.1:3700/recipe')
    .then((res) => {
      this.setState({
        recipe: res.data.recipe
      });
    })
    // .then(console.log('resonse is here', response))
    console.log('i was clicked', this.state.recipe)
  }
  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <h2>good boy</h2>
        <button onClick={this.getRecipe}>click me</button>

      </div>
    )
  }
}
export default App;
