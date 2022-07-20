import React from 'react'

//this is the same thing as what's in App.js but the classes version
//state is different also: you create an object
//state is what updates the view (aka the DOM)

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    //render() is what runs and what shows what's on the screen every time the app runs
    render() {
        return(
            <div>
      <h1>Hello React App</h1>
      <h2>Count is {this.state.count}</h2>
      <button onClick= {() => {this.setState({count: this.state.count+1})}}>Click Me</button>
    </div>
        )
    }
}
export default App;