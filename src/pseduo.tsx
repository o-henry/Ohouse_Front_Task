import React, { useState, useEffect } from 'react';

const Blueprint = () => {
  const [storage, setStorage] = useState(DUMMY);

  return (
    <>
      <CardList data={storage} setStorage={setStorage} />
    </>
  );
};

const CardList = ({ data, setStorage }: any) => {
  return (
    <>
      {data.map((feed: any, id: number) => (
        <Card key={id} feed={feed} setStorage={setStorage} />
      ))}
    </>
  );
};

const Card = ({ feed, setStorage }: any) => {
  const handleClick = (e: any) => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.id == feed.id);
    if (e.currentTarget.id == feed.id) {
      setStorage((storage: any) => [...storage, { selected: true, ...feed }]);
    }

    console.log(feed);
  };

  return (
    <div>
      <div>{feed.nickname}</div>
      <button
        id={feed.id}
        onClick={handleClick}
        style={{ backgroundColor: feed.selected ? 'green' : 'red' }}
      >
        스크랩
      </button>
    </div>
  );
};

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

export default Blueprint;
