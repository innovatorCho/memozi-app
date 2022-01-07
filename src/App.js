import { useState } from 'react';
import './App.css';

function App() {

  const [textlen, setTextLen] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [textString, setTextString] = useState('');

  const [checkedSpace, setCheckedSpace] = useState(false);
  const [checkedEnter, setCheckedEnter] = useState(false);

  const [spaceNum, setSpaceNum] = useState(0);
  const [minusNum, setMinsNum] = useState(0);
  const [lineNum, setLineNum] = useState(0);
  const [multiByte, setMultByte] = useState(0);
  const [singleByte, setSingleByte] = useState(0);

  const CODE_SPACE = 'CSPACE';
  const CODE_ENTER = 'CENTER';

  const handleTextArea = (e) => {
    setTextLen(e.target.value.length);
    setTextCount(e.target.value.length);
    setTextString(e.target.value);

    let spacenum = 0, minusnum = 0, linenum = 0, multibyte = 0, singlebyte = 0;

    for(let i = 0 ; i < e.target.value.length ; i++) {
      //console.log(textString.charAt(i));
      if(e.target.value.charAt(i)===' '){
        spacenum++;
      }
      if(e.target.value.charCodeAt(i)===13 || e.target.value.charCodeAt(i)===10){
        minusnum++;
      }
      if(e.target.value.charCodeAt(i)===10){
        linenum++;
      }
      if(e.target.value.charCodeAt(i)>255){
        multibyte++;
      }else{
        singlebyte++;
      }
    }
    setSpaceNum(spacenum);
    setMinsNum(minusnum);
    setLineNum(linenum);
    setMultByte(multibyte);
    setSingleByte(singlebyte);
    console.log(spacenum + " " + linenum + " " + minusnum + " " + multibyte + " " + singlebyte);
    console.log(spaceNum + " " + lineNum + " " + minusNum + " " + multiByte + " " + singleByte);
    
    let totalCount = singlebyte + multibyte;
    setTextLen(totalCount);
    //setTextCount();
  }

  const handleChecked = (e) => {
    
    if(e.target.defaultValue === CODE_SPACE) {
      setCheckedSpace(e.target.checked);
    }
    if(e.target.defaultValue === CODE_ENTER) {
      setCheckedEnter(e.target.checked);
    }
    console.log(`${CODE_ENTER} is ${checkedEnter} and ${CODE_SPACE} is ${checkedSpace}`);
    getTextCount(); 
  }

  const getTextCount = () => {
    console.log(`${textlen}, spacenum : ${spaceNum}, lineNum : ${lineNum}`);
    let totalCount = textCount;

    if(checkedSpace) {
      totalCount = totalCount - spaceNum;
    }
    if(checkedEnter) {
      totalCount = totalCount - lineNum;
    }
    setTextLen(totalCount);
   // setTextLen(totalCount);
    console.log(spaceNum + " " + lineNum + " " + minusNum + " " + multiByte + " " + singleByte);
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
