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
}

function Card({ feed, style }: Props) {
  const { image_url, nickname } = feed;

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className={cn('Card', style)}>
      <img src={avatar} alt="profile_image" />
      <span>{nickname}</span>
      <img src={image_url} alt="feed_image" />
      <Button onClick={handleClick}>
        <img src={isClick ? scrap_btn : normal_btn} alt="scrap_btn" />
      </Button>
    </div>
  );
}

export default Card;
