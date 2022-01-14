
import './TextLenInfo.css';

const TextLenInfo = () => {
    return(
        <div className="textLenInfo">
            <div className="textLenInfo-header">
                <h1>글자수 세기</h1>
                <span>
                    이력서, 블로그등을 글을 작성 할 때 글자수, 맞춤법등을 확인 해야하는 경우가 있습니다. <p/>
                    이런 부분을 확인하지 못한 경우 쉽게 누락될 수 있습니다. <p/>
                    글자수 세기는 정확한 글자수를 확인 할 수 있도록 도움을 줍니다.
                </span>
                <h2>글자수 계산 방법</h2>
                <ul>
                    <li>
                     한글, 영어등 모든 글자를 1글자로 계산합니다.
                    </li>
                    <li>
                        띄워쓰기 제외 : 옵션을 체크하면 글자수 세기에 띄워쓰기를 포함하지 않습니다.
                    </li>
                    <li>
                        줄바꿈 제외 : 옵션을 체크하면 줄바꿈을 글자수 세기에 포함하지 않습니다.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default TextLenInfo;