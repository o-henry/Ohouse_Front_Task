import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { check_btn, unchecked_btn } from 'assets';

interface Props {
  style?: string;

  handleClick: any;

  isClick: boolean;
}

function Filter({ style, ...props }: Props): React.ReactElement {
  const { handleClick, isClick } = props;

  return (
    <div className={cn('Filter', style)}>
      <Button onClick={() => handleClick(!isClick)}>
        <img
          src={isClick ? check_btn : unchecked_btn}
          alt="check_btn"
          className="image check"
        />
      </Button>
      스크랩한 것만 보기
    </div>
  );
}

Filter.defaultProps = {
  style: '',
};

export default React.memo(Filter);
