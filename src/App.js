import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [thumbsUp, setThumbsUp] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlo</h4>
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

      <Modal></Modal>
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
