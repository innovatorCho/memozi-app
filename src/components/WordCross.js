import './WordCross.css';

const WordCross = () => {
    let wordData = '사과';
    const idArray = [
        {
            ids: ['1-1', '1-2']
        },
        {
            ids: ['1-1', '1-3']
        },
        {
            ids: ['1-2', '1-1']
        },
        {
            ids: ['1-2', '1-4']
        },
        {
            ids: ['1-3', '1-1']
        },
        {
            ids: ['1-3', '1-4']
        },
        {
            ids: ['1-4', '1-2']
        },
        {
            ids: ['1-4', '1-3']
        },
    ];

     const handleChecked = (e) => {
        
        wordData = e.target.value
        console.log(wordData);
        getRandom(e.target.value);
    };

    const getRandom = (word) => {
        let idNum = Math.floor(Math.random() * idArray.length);
        console.log(idArray[idNum].ids.length);

        document.getElementById('1-1').innerText = '';
        document.getElementById('1-2').innerText = '';
        document.getElementById('1-3').innerText = '';
        document.getElementById('1-4').innerText = '';

        for(let i = 0 ; i < idArray[idNum].ids.length ; i++) {
            document.getElementById(idArray[idNum].ids[i]).innerText = getWordString(i);
        }
    };

    const getWordString = (len) => {
        return wordData.charAt(len);
    };

    return(
        <div className="wordCross">
            <table className="wordCross-table">
                <tr>
                    <td id='1-1'>1</td>
                    <td id='1-2'>2</td>
                </tr>
                <tr>
                    <td id='1-3'>3</td>
                    <td id='1-4'>4</td>
                </tr>
            </table>        
            <div className='wordCross-button'>
                <input type="text" placeholder='input word' className='wordCross-button__input' onChange={handleChecked}/>
                <button onClick={handleChecked}>정렬하기</button>
            </div>
        </div>
    );
}

export default WordCross;