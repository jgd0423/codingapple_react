import './App.css';
import { useState } from 'react';

function App() {
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [thumbsUp, setThumbsUp] = useState([0, 0, 0]);
  let [isModalShow, setIsModalShow] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {titles.map((title, idx) => {
        return (
          <div className="list" key={idx}>
            <h4>
              {title}{' '}
              <span
                onClick={() => {
                  const thumbsUpCopy = [...thumbsUp];
                  let clickedThumbsUp = thumbsUpCopy[idx];
                  clickedThumbsUp++;
                  thumbsUpCopy[idx] = clickedThumbsUp;
                  setThumbsUp(thumbsUpCopy);
                }}
              >
                👍
              </span>{' '}
              {thumbsUp[idx]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {isModalShow ? <Modal /> : null}
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
