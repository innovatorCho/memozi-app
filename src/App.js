import { useState } from 'react';
import './App.css';

function App() {

  const [textlen, setTextLen] = useState(0);

  const handleTextArea = (e) => {
    setTextLen(e.target.value.length);
    
  }

  const handleChecked = (e) => {
    console.log(e.target.checked);
  }

  return (
    <div className="App">
      <div className='memozi-header'>
        <label className='memozi-header__label'>{textlen}</label>
        <div className='memozi-header__option'>
          <label className='header__option_label'>띄어쓰기 빼기</label>
          <input type="checkbox" className='memozi-header__option__blank' onChange={handleChecked}></input>
        </div>
      </div>
      <textarea className='memozi-textarea' onChange={handleTextArea}></textarea>
    </div>
  );
}

export default App;
