import React, { useState } from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { IData } from 'containers/CardList';
import { normal_btn, scrap_btn, avatar } from 'assets';

interface Props {
  /* className에 따른 style*/
  style?: string;
  /* feed type */
  feed: IData;

  target: any;
}

function Card({ feed, style, target }: Props) {
  const { image_url, nickname } = feed;

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className={cn('Card', style)} ref={target}>
      <div>
        <img src={avatar} alt="profile_image" className="image avatar" />
        <span>{nickname}</span>
      </div>

      <div className="Card book_mark">
        <img src={image_url} alt="feed_image" className="image feed" />

        <Button style="book_mark" onClick={handleClick}>
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
