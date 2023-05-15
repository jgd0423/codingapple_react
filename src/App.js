import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let [titles, setTitles] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [title, setTitle] = useState(titles[0]);
  let [thumbsUps, setThumbsUps] = useState([0, 0, 0]);
  let [isModalShow, setIsModalShow] = useState(false);
  let [inputValue, setInputValue] = useState('');
  let [titleIndex, setTitleIndex] = useState({ prev: null, now: null });

  useEffect(() => {
    if (titleIndex.prev === null && titleIndex.now === null) {
      return;
    }

    console.log(`prevTitleIndex: ${titleIndex.prev}`);
    console.log(`nowTitleIndex: ${titleIndex.now}`);

    if (titleIndex.prev !== titleIndex.now) {
      setIsModalShow(true);
    }

    if (titleIndex.prev === titleIndex.now) {
      setIsModalShow(false);
      setTitleIndex({ prev: null, now: null });
    }
  }, [titleIndex]);

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
                setTitle(title);
                setTitleIndex({ prev: titleIndex.now, now: idx });
              }}
            >
              {title}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();
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
            <button
              onClick={() => {
                const removedTitles = [...titles.slice(0, idx), ...titles.slice(idx + 1)];
                setTitles(removedTitles);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button
        onClick={() => {
          const titlesCopy = [...titles];
          titlesCopy.unshift(inputValue);
          setTitles(titlesCopy);
          setInputValue('');
        }}
      >
        글추가
      </button>

      {isModalShow ? <Modal title={title} /> : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
