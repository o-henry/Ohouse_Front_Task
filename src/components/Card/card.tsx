import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { IFeed } from 'containers/CardList';
import { normal_btn, scrap_btn, avatar } from 'assets';

interface Props {
  /* className에 따른 style*/
  style?: string;
  /* feed type */
  feed: IFeed;
  /* scroll target */
  target: any;

  setStorage: any;

  storage: any;
}

function Card({ feed, style, target, storage, setStorage }: Props) {
  const { image_url, nickname } = feed;

  const [isClick, setIsClick] = useState(false);

  console.log('밖', storage, isClick);

  useEffect(() => {
    console.log('안', isClick);
    if (isClick) {
      console.log('안 투루', isClick);

      setStorage((storage: any) => [...storage, { ...feed, selected: true }]);
      console.log('안', storage);

      // window.localStorage.setItem('scrap', JSON.stringify(storage));
    } else {
    }
  }, [isClick]);

  return (
    <div className={cn('Card', style)} ref={target}>
      <div>
        <img src={avatar} alt="profile_image" className="image avatar" />
        <span className="Card nickname">{nickname}</span>
      </div>

      <div className="Card book_mark">
        <img src={image_url} alt="feed_image" className="image feed" />

        <Button style="book_mark" onClick={() => setIsClick(!isClick)}>
          <img
            src={isClick ? scrap_btn : normal_btn}
            alt="scrap_btn"
            className="image book"
          />
        </Button>
      </div>
      <div ref={target} />
    </div>
  );
}

export default Card;
