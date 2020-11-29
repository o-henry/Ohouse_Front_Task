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

  const [storage, setStorage] = useLocalStorage('', 'tester');
  const [items, setItems] = useState<any>(DUMMY);

  const onSelect = (id: any) => {
    const data = [...items];
    const itemIdx = data.findIndex(item => item.id === id);
    data[itemIdx].selected = !data[itemIdx].selected;
    setItems(data);

    setStorage(items.filter((item: any) => item.selected));
    // window.localStorage.setItem(
    //   'temp',
    //   JSON.stringify(items.filter((item: any) => item.selected)),
    // );
  };

  console.log('items', items);

  return (
    <div>
      <Filter handleClick={setIsClick} isClick={isClick} />
      {items.map((feed: any, idx: any) => {
        return (
          <Card
            key={feed.id}
            feed={feed}
            onSelect={onSelect}
            storage={storage}
          />
        );
      })}
    </div>
  );

  function Card({ feed, onSelect, storage }: any) {
    // const getData = window.localStorage.getItem('temp');

    // getData && JSON.parse(getData)
    // getData.map()

    return (
      <>
        <div>
          <div>{feed.nickname}</div>
          <button
            id={feed.id}
            style={{
              backgroundColor: storage.forEach((ele: any) =>
                ele.selected ? 'red' : 'green',
              ),
            }}
            onClick={() => onSelect(feed.id)}
          >
            스크랩
          </button>
        </div>
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
