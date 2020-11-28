import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'hook';

const Blueprint = () => {
  DUMMY.forEach((ele: any) => (ele['selected'] = false));
  const [data, setData] = useState(DUMMY);

  const [store, setStore] = useState<any>([]);

  const [isClick, setIsClick] = useState(false);

  // const [storage, setStorage] = useLocalStorage([]);

  // console.log(storage);
  // const onSelect = (id: any) => {
  //   return setStorage(!storage, id);
  // };

  return (
    <div>
      <Filter handleClick={setIsClick} isClick={isClick} />
      {data.map((feed: any, idx: any) => (
        <Card
          key={idx}
          feed={feed}
          // onSelect={onSelect}
          // setStorage={setStorage}
        />
      ))}
    </div>
  );

  function Filter({ handleClick }: any) {
    return (
      <>
        <button onClick={() => handleClick(!isClick)}>show only scraped</button>
      </>
    );
  }

  function Card({ feed }: any) {
    const [storage, setStorage] = useLocalStorage(false, feed.id);

    return (
      <>
        <div>
          <div>{feed.nickname}</div>
          <button
            // 스타일 변경 상태값을 localStorage에서 가져와야 한다.
            // localstorage.getItem()
            style={{ backgroundColor: storage ? 'red' : 'green' }}
            onClick={() => setStorage(!storage)}
          >
            스크랩
          </button>
        </div>
      </>
    );
  }
};

export default Blueprint;

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

// import React, { useState } from 'react';
// import { useLocalStorage } from 'hook';

// const Blueprint = () => {
//   DUMMY.forEach((ele: any) => (ele['selected'] = false));
//   const [data, setData] = useState(DUMMY);
//   const [isClick, setIsClick] = useState(false);
//   const [storage, setStorage] = useLocalStorage([], 'scraped');

//   const onSelect = (id: any) => {
//     let temp: any = DUMMY.filter(feed => feed.id === id);
//     window.localStorage.setItem(id, JSON.stringify(temp));
//     console.log(temp);
//   };

//   React.useEffect(() => {}, [data]);

//   return (
//     <div>
//       <Filter handleClick={setIsClick} isClick={isClick} />
//       {data.map((feed: any, idx: any) => (
//         <Card key={idx} feed={feed} onSelect={onSelect} />
//       ))}
//     </div>
//   );

//   function Filter({ handleClick, isClick }: any) {
//     return (
//       <>
//         <button onClick={() => handleClick(!isClick)}>show only scraped</button>
//       </>
//     );
//   }

//   function Card({ feed, onSelect }: any) {
//     console.log('스토리지', storage);
//     return (
//       <>
//         <div>{feed.nickname}</div>
//         <button
//           // 스타일 변경 상태값을 localStorage에서 가져와야 한다.
//           // localstorage.getItem()
//           style={{ backgroundColor: feed.selected ? 'green' : 'red' }}
//           onClick={() => onSelect(feed.id)}
//         >
//           스크랩
//         </button>
//       </>
//     );
//   }
// };

// export default Blueprint;

// const DUMMY = [
//   {
//     id: 0,
//     image_url: 'test',
//     nickname: 'blah',
//     profile_image_url: 'halo',
//   },
//   {
//     id: 1,
//     image_url: 'kimchi',
//     nickname: 'hihihi',
//     profile_image_url: '히히히',
//   },
//   {
//     id: 2,
//     image_url: 'hohoho',
//     nickname: '파인애플',
//     profile_image_url: 'aloha',
//   },
//   {
//     id: 3,
//     image_url: '하와이',
//     nickname: '나나나',
//     profile_image_url: 'hello',
//   },
//   {
//     id: 4,
//     image_url: 'blah',
//     nickname: '가가가가',
//     profile_image_url: 'hi',
//   },
// ];
