import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { IFeed } from 'containers/PhotoList';
import { normal_btn, scrap_btn, avatar } from 'assets';

interface Props {
  /* className에 따른 style*/
  style?: string;
  /* feed type */
  feed: IFeed;
  /* scroll target */
  target: any;
  /* handle scrap button */
  onSelect: any;
  /* filter click */
  isfilterClick: boolean;

  storage: any;
}

function Card({ feed, ...props }: Props) {
  const { style, onSelect, target, isfilterClick, storage } = props;
  const { image_url, nickname } = feed;

  return (
    <div className={cn('Card', style)} ref={target}>
      <div>
        <img className="image avatar" src={avatar} alt="profile_image" />
        <span className="Card nickname">{nickname}</span>
      </div>

      <div className="Card book_mark">
        <img className="image feed" src={image_url} alt="feed_image" />

        <Button style="book_mark" onClick={() => onSelect(feed.id)}>
          <img
            className="image book"
            alt="scrap_btn"
            src={feed.selected ? scrap_btn : normal_btn}
          />
        </Button>
      </div>
      <div ref={target} />
    </div>
  );
}

export default Card;
