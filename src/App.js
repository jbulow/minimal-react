import React from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      clickCount: 0
    };
    console.log('props is ', props)
    console.log('state is ', this.state)
  }
  incrementClickCount(){
    this.setState({clickCount: this.state.clickCount + 1});
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button
          onClick={this.incrementClickCount.bind(this)}>
          Click Count: {this.state.clickCount}
        </button>
    </div>
    );
  }
}

export default App
