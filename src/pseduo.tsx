import React, { useState } from 'react';

const Blueprint = () => {
  // const [selected, setSelected] = useState(false);
  DUMMY.forEach((ele: any) => (ele['selected'] = false));
  const [data, setData] = useState(DUMMY);

  console.log(data);

  const onSelect = (id: any) => {
    setData(
      data.map((feed: any) =>
        feed.id === id ? { ...feed, selected: !feed.selected } : feed,
      ),
    );
  };

  return (
    <div>
      <Filter />
      {data.map((feed: any, idx: any) => (
        <Card key={idx} feed={feed} onSelect={onSelect} />
      ))}
    </div>
  );

  function Filter() {
    return (
      <>
        <button>show only scraped</button>
      </>
    );
  }

  function Card({ feed, onSelect }: any) {
    return (
      <>
        <div>{feed.nickname}</div>
        <button
          style={{ backgroundColor: feed.selected ? 'green' : 'red' }}
          onClick={() => onSelect(feed.id)}
        >
          스크랩
        </button>
      </>
    );
  }
};

export default Blueprint;

const DUMMY = [
  {
    id: 0,
    image_url: 'test',
    nickname: 'blah',
    profile_image_url: 'halo',
  },
  {
    id: 1,
    image_url: 'kimchi',
    nickname: 'hihihi',
    profile_image_url: '히히히',
  },
  {
    id: 2,
    image_url: 'hohoho',
    nickname: '파인애플',
    profile_image_url: 'aloha',
  },
  {
    id: 3,
    image_url: '하와이',
    nickname: '나나나',
    profile_image_url: 'hello',
  },
  {
    id: 4,
    image_url: 'blah',
    nickname: '가가가가',
    profile_image_url: 'hi',
  },
];
