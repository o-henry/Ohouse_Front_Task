import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { IFeed } from 'containers/PhotoList';
import { normal_btn, scrap_btn, avatar } from 'assets';
import { useLocalStorage } from 'hook';

interface Props {
  /* className에 따른 style*/
  style?: string;
  /* feed type */
  feed: IFeed;
  /* scroll target */
  target: any;
  /* filter state */
  isfilterClick?: boolean;
}

function Card({ feed, ...props }: Props) {
  const [storage, setStorage] = useLocalStorage(false, feed.id);

  const { style, target, isfilterClick } = props;
  const { image_url, nickname } = feed;

  return (
    <>
      {isfilterClick && storage && (
        <div className={cn('Card', style)}>
          <div>
            <img className="image avatar" src={avatar} alt="profile_image" />
            <span className="Card nickname">{nickname}</span>
          </div>

          <div className="Card book_mark">
            <img className="image feed" src={image_url} alt="feed_image" />

            <Button style="book_mark" onClick={() => setStorage(!storage)}>
              <img
                className="image book"
                alt="scrap_btn"
                src={storage ? scrap_btn : normal_btn}
              />
            </Button>
          </div>
        </div>
      )}

      {!isfilterClick && (
        <div className={cn('Card', style)}>
          <div>
            <img className="image avatar" src={avatar} alt="profile_image" />
            <span className="Card nickname">{nickname}</span>
          </div>

          <div className="Card book_mark">
            <img className="image feed" src={image_url} alt="feed_image" />

            <Button style="book_mark" onClick={() => setStorage(!storage)}>
              <img
                className="image book"
                alt="scrap_btn"
                src={storage ? scrap_btn : normal_btn}
              />
            </Button>
          </div>
        </div>
      )}

      <div ref={target} />
    </>
  );
}

export default Card;
