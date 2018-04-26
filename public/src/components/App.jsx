import React from 'react';
import Axios from 'axios';
import Steps from './Steps.jsx';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
    this.getRecipe = this.getRecipe.bind(this);
  };

  getRecipe() {
    Axios.get('http://127.0.0.1:3700' + document.location.pathname + 'instructions')
    .then((res) => {
      this.setState({
        recipe: res.data.recipe
      });
    })
    // .then(console.log('resonse is here', response))
    console.log('i was clicked')
  }
  render() {
    return (
      <div className  = "container">
        <h3 className = "top-title">step-by-step</h3>
        <h1 className = "instructions-title">Instructions</h1>
        <Steps steps={this.state.recipe}/>
        <button onClick={this.getRecipe}>click me</button>

      </div>

    )
  }
}
export default App;
