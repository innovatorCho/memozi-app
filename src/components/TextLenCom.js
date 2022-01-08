import { useState, useEffect } from "react";
import './TextLenCom.css';

const TextLenCom = () => {
    const [textlen, setTextLen] = useState(0);
    const [textCount, setTextCount] = useState(0);
    const [textString, setTextString] = useState('');
  
    const [checkedSpace, setCheckedSpace] = useState(false);
    const [checkedEnter, setCheckedEnter] = useState(false);
  
    const CODE_SPACE = 'CSPACE';
    const CODE_ENTER = 'CENTER';
  
    const handleTextArea = (e) => {
      setTextLen(e.target.value.length);
      setTextCount(e.target.value.length);
      setTextString(e.target.value);
      //setTextCount();
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
  
      let spacenum = 0, minusnum = 0, linenum = 0, multibyte = 0, singlebyte = 0;
  
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
    });
   
    return(
        <div className="textComponent">
            <header className="textComponent-header">
                <h1>글자수 세기</h1>
            </header>
            <div className='memozi-header'>
                <div className="memozi-header__div memozi-header__block">
                    <label className='memozi-header__label'>
                        <span>현재 글자 수 : </span>
                        {textlen}
                    </label>
                </div>
                <div className='memozi-header__option__space memozi-header__block'>
                <label className='memozi-header__option__space__label'>띄어쓰기 빼기</label>
                <input type="checkbox" className='memozi-header__option__space__blank' value={CODE_SPACE} onChange={handleChecked}></input>
                </div>
                <div className='memozi-header__option__enter memozi-header__block'>
                <label className='memozi-header__option__enter__label'>줄바꿈 빼기</label>
                <input type="checkbox" className='memozi-header__option__enter__blank' value={CODE_ENTER} onChange={handleChecked}></input>
                </div>
            </div>
            <div className="memozi-textarea__header">
                <textarea className='memozi-textarea' onChange={handleTextArea}></textarea>
            </div>
        </div>
    );  
}

export default TextLenCom;