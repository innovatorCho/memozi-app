import { useState } from 'react';
import './App.css';

function App() {

  const [textlen, setTextLen] = useState(0);
  const [textString, setTextString] = useState('');

  const [checkedSpace, setCheckedSpace] = useState(false);
  const [checkedEnter, setCheckedEnter] = useState(false);

  const CODE_SPACE = 'CSPACE';
  const CODE_ENTER = 'CENTER';

  const handleTextArea = (e) => {
    setTextLen(e.target.value.length);
    setTextString(e.target.value);
    //setTextCount();
  }

  const handleChecked = (e) => {
   // console.log(`${e.target.defaultValue} checked ${e.target.checked}, text : ${textlen}`);
    //console.log(textString + " " + textString.length);

    if(e.target.defaultValue === CODE_SPACE) {
      setCheckedSpace(e.target.checked);
    }
    if(e.target.defaultValue === CODE_ENTER) {
      setCheckedEnter(e.target.checked);
    }
    console.log(`${CODE_ENTER} is ${checkedEnter} and ${CODE_SPACE} is ${checkedSpace}`);
    setTextCount(); 
  }

  const setTextCount = () => {
    let spacenum = 0, minusnum = 0, linenum = 0, multibyte = 0, singlebyte = 0;
    console.log(textString);

    for(let i = 0 ; i < textString.length ; i++) {
      //console.log(textString.charAt(i));
      if(textString.charAt(i)===' '){
        spacenum++;
      }
      if(textString.charCodeAt(i)===13 || textString.charCodeAt(i)===10){
        minusnum++;
      }
      if(textString.charCodeAt(i)===10){
        linenum++;
      }
      if(textString.charCodeAt(i)>255){
        multibyte++;
      }else{
        singlebyte++;
      }
    }
    let totalCount = singlebyte + multibyte;

    if(checkedSpace) {
      totalCount = totalCount - spacenum;
    }
    if(checkedEnter) {
      totalCount = totalCount - linenum;
    }
    setTextLen(totalCount);
    console.log(spacenum + " " + linenum + " " + minusnum + " " + multibyte + " " + singlebyte);
   // console.log(`total count : ${total}`);
  }

  return (
    <div className="App">
      <div className='memozi-header'>
        <label className='memozi-header__label'>{textlen}</label>
        <div className='memozi-header__option__space'>
          <label className='memozi-header__option__space__label'>띄어쓰기 빼기</label>
          <input type="checkbox" className='memozi-header__option__space__blank' value={CODE_SPACE} onChange={handleChecked}></input>
        </div>
        <div className='memozi-header__option__enter'>
          <label className='memozi-header__option__enter__label'>줄바꿈 빼기</label>
          <input type="checkbox" className='memozi-header__option__enter__blank' value={CODE_ENTER} onChange={handleChecked}></input>
        </div>
      </div>
      <textarea className='memozi-textarea' onChange={handleTextArea}></textarea>
    </div>
  );
}

export default App;
