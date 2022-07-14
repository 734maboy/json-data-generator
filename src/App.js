
import './style/main.css';
import GenInput from './components/UI/GenInput/GenInput'
import GenButton from './components/UI/GenButton/GenButton'
import { useState } from 'react'

function App() {

  const title = "Configure row parameters";

  const [val, setVal] = useState('');

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}> {title} </h1>
      <GenInput
        value={val}
        setValue={setVal}
        placeholder="Write your file name"
      />

      <GenButton
        clickHandle={e => console.log(e)}
        type={"success"}
      >
        Generate
      </GenButton>
      {/*<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Freepik - Flaticon</a>*/}
    </div>
  );
}

export default App;
