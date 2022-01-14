import { useState, useEffect } from "react";
import './TextLenCom.css';

const TextLenCom = () => {
    const [textlen, setTextLen] = useState(0);
    const [spaceCount, setSpaceCount] = useState(0);
    const [lineCount, setLineCount] = useState(0);
    const [textString, setTextString] = useState('');
  
    const [checkedSpace, setCheckedSpace] = useState(false);
    const [checkedEnter, setCheckedEnter] = useState(false);
  
    const CODE_SPACE = 'CSPACE';
    const CODE_ENTER = 'CENTER';
  
    const handleTextArea = (e) => {
      setTextLen(e.target.value.length);
      setTextString(e.target.value);
    }
  
    const handleChecked = (e) => {
      
      if(e.target.defaultValue === CODE_SPACE) {
        setCheckedSpace(e.target.checked);
      }
      if(e.target.defaultValue === CODE_ENTER) {
        setCheckedEnter(e.target.checked);
      }
    }
  
    useEffect(() => {
  
      let speceCnt = 0, lineCnt = 0, multiByte = 0, singleByte = 0;
  
      for(let i = 0 ; i < textString.length ; i++) {
        if(textString.charAt(i)===' '){
          speceCnt++;
        }
        if(textString.charCodeAt(i)===10){
          lineCnt++;
        }
        if(textString.charCodeAt(i)>255){
          multiByte++;
        }else{
          singleByte++;
        }
      }
      let totalCount = singleByte + multiByte;
  
      if(checkedSpace) {
        totalCount = totalCount - speceCnt;
      }
      if(checkedEnter) {
        totalCount = totalCount - lineCnt;
      }
      setSpaceCount(speceCnt);
      setLineCount(lineCnt);
      setTextLen(totalCount);
    }, [checkedEnter, checkedSpace, textString]);
   
    return(
        <div className="textComponent">
            <header className="textComponent-header">
                <h1>글자수 세기</h1>
            </header>
            <div className='memozi-header'>
                <div className="memozi-header__div">
                    <label className='memozi-header__label'>
                        <span>현재 글자 수 : </span>
                        {textlen}
                    </label>
                </div>
                <div className='memozi-header__option__space'>
                  <input type="checkbox" className='memozi-header__option__space__blank' value={CODE_SPACE} onChange={handleChecked}></input>
                  <label className='memozi-header__option__space__label'>띄어쓰기 제외(띄어쓰기 수 : {spaceCount})</label>                
                </div>
                <div className='memozi-header__option__enter'>
                  <input type="checkbox" className='memozi-header__option__enter__blank' value={CODE_ENTER} onChange={handleChecked}></input>                  
                  <label className='memozi-header__option__enter__label' >줄바꿈 제외(줄바꿈 수 : {lineCount})</label>                
                </div>
            </div>
            <div className="memozi-textarea__header">
                <textarea className='memozi-textarea' onChange={handleTextArea}></textarea>
            </div>
        </div>
    );  
}

export default TextLenCom;