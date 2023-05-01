import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [thumbsUp, setThumbsUp] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
        <button
          onClick={() => {
            const titleCopy = [...title];
            titleCopy[0] = '여자 코트 추천';
            setTitle(titleCopy);
          }}
        >
          asf
        </button>
      </div>
      <div className="list">
        <h4>
          {title[0]}{' '}
          <span
            onClick={() => {
              setThumbsUp(++thumbsUp);
            }}
          >
            👍
          </span>{' '}
          {thumbsUp}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
