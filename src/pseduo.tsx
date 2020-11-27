import React from 'react';

function App() {
  const [filterClick, setFilterClick] = React.useState(false);

  const handleClick = () => {
    setFilterClick(!filterClick);
  };

  console.log('filter click: ', filterClick);

  let data: any;

  if (filterClick) {
    data = [window.localStorage.getItem('key')];
  } else {
    data = dummy;
  }

  console.log('data: ', data);

  return (
    <>
      <Filter handleClick={handleClick} />
      <CardList data={data} />
      <Modal />
    </>
  );
}

function Filter({ children, handleClick }: any) {
  // get LocalStorage -> only scrapped

  return (
    <>
      <button onClick={handleClick}>스크랩한 것만 보기</button>
    </>
  );
}

function CardList({ data, onToggle }: any) {
  console.log('card list data: ', data);
  return (
    <>
      {data.map((feed: any, idx: any) => (
        <Card feed={feed} key={idx} id={feed.id} onToggle={onToggle} />
      ))}
    </>
  );
}

/**
 * Card component
 *  Scrap Button
 */
function Card({ feed }: any) {
  const [isClick, setIsClick] = React.useState(false);
  const [storage, setStorage] = React.useState<any>([]);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  React.useEffect(() => {
    isClick &&
      setStorage([
        ...storage,
        window.localStorage.setItem('key', JSON.stringify(feed)),
      ]);
  }, [isClick]);

  return (
    <>
      <div>{feed.nickname}</div>
      <button
        style={{ backgroundColor: isClick ? 'red' : 'blue' }}
        onClick={handleClick}
      >
        스크랩
      </button>
    </>
  );
}

function Modal() {
  return (
    <>
      <p>스크랩 되었습니다.</p>
    </>
  );
}

const dummy = [
  {
    id: 0,
    image_url: '가가가',
    nickname: 'hello',
  },
  {
    id: 1,
    image_url: 'blah',
    nickname: '나나나',
  },
  {
    id: 2,
    image_url: 'blah',
    nickname: '하하하',
  },
];

export default App;
