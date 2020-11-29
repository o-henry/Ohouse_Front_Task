import { useLocalStorage } from 'hook';
import React, { useEffect, useState } from 'react';

const DUMMY = [
  {
    id: 10,
    nickname: 'blah',
  },
  {
    id: 11,
    nickname: 'hihihi',
  },
  {
    id: 21,
    nickname: '파인애플',
  },
  {
    id: 33,
    nickname: '나나나',
  },
  {
    id: 44,
    nickname: '가가가가',
  },
];

DUMMY.forEach((ele: any) => (ele['selected'] = false));

const Blueprint = () => {
  // id만 데이터에서 뽑아오기

  const [isClick, setIsClick] = useState(false);

  const [items, setItems] = useState<any>(DUMMY);

  console.log(isClick);

  return (
    <div>
      <Filter handleClick={setIsClick} isClick={isClick} />
      {items.map((feed: any, idx: any) => {
        return <Card key={feed.id} feed={feed} isClick={isClick} />;
      })}
    </div>
  );

  function Card({ feed, isClick }: any) {
    const [storage, setStorage] = useLocalStorage(0, feed.id);

    console.log('storate', storage, feed);
    return (
      <>
        {isClick && storage && (
          <div>
            <div>{feed.nickname}</div>
            <button
              id={feed.id}
              style={{
                backgroundColor: storage ? 'green' : 'red',
              }}
              onClick={() => setStorage(!storage)}
            >
              스크랩
            </button>
          </div>
        )}
        {!isClick && (
          <div>
            <div>{feed.nickname}</div>
            <button
              id={feed.id}
              style={{
                backgroundColor: storage ? 'green' : 'red',
              }}
              onClick={() => setStorage(!storage)}
            >
              스크랩
            </button>
          </div>
        )}
      </>
    );
  }

  function Filter({ handleClick }: any) {
    return (
      <>
        <button
          style={{ backgroundColor: isClick ? 'red' : 'green' }}
          onClick={() => handleClick(!isClick)}
        >
          show only scraped
        </button>
      </>
    );
  }
};

export default Blueprint;
