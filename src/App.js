import './App.css';
import { useState } from 'react';

function App() {
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [thumbsUps, setThumbsUps] = useState([0, 0, 0]);
  let [isModalShow, setIsModalShow] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {titles.map((title, idx) => {
        return (
          <div className="list" key={idx}>
            <h4
              onClick={() => {
                setIsModalShow(!isModalShow);
              }}
            >
              {title}{' '}
              <span
                onClick={() => {
                  const thumbsUpsCopy = [...thumbsUps];
                  let clickedThumbsUp = thumbsUpsCopy[idx];
                  clickedThumbsUp++;
                  thumbsUpsCopy[idx] = clickedThumbsUp;
                  setThumbsUps(thumbsUpsCopy);
                }}
              >
                👍
              </span>{' '}
              {thumbsUps[idx]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {isModalShow ? <Modal titles={titles} setTitles={setTitles} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.titles[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const titlesCopy = [...props.titles];
          titlesCopy[0] = '여자코트 추천';
          props.setTitles(titlesCopy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

export default App;
