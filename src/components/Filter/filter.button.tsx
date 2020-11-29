import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { check_btn, unchecked_btn } from 'assets';

interface Props {
  /* className에 따른 style*/
  style?: string;
  /* handle button event by state*/
  handleClick: any;
  /* click state */
  isClick: boolean;
}

function Filter({ style, ...props }: Props): React.ReactElement {
  const { handleClick, isClick } = props;

  return (
    <div className={cn('Filter', style)}>
      <Button onClick={() => handleClick(!isClick)}>
        <img
          className="image check"
          alt="check_btn"
          src={isClick ? check_btn : unchecked_btn}
        />
      </Button>
      <div className="text"> 스크랩한 것만 보기 </div>
    </div>
  );
}

Filter.defaultProps = {
  style: '',
};

export default React.memo(Filter);
