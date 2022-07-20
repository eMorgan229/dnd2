import './App.css'
import {useState} from 'react'
import MainMenu from './components/MainMenu';
import CreateACharacter from './components/CreateACharacter';
import Article from './components/Article';
function App() {
  // This syntax is called JSX = JavaScript XML

  // useState is a function that returns an array of two elements
  // returns a state variable and a function
  // to update it

  //TERNARY: CONDITION ? return this if true :return this if false
// <Home /> ... const HOme = {html: []. change: () => {}}
// think of react components as OBJECTS that you add props (properties to)

  const [screen, setScreen] = useState('main') 

  return (
<div>
  {
  screen === 'main' ? <MainMenu setScreen={setScreen} />
  : <CreateACharacter />
}
<Article object={'object value'}/>
</div>

  );
}

export default App;