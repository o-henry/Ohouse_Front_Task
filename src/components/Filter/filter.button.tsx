import React from 'react';
import cn from 'classnames';

import { Button, Card } from 'components';
import { check_btn, unchecked_btn } from 'assets';
import { useLocalStorage } from 'hook';

interface Props {
  style?: string;

  handleClick: any;

  isClick: any;

  onFilter: any;

  storage: any;

  onSelect: any;
}

function Filter({ style, ...props }: Props): React.ReactElement {
  const { handleClick, isClick, onFilter, storage, onSelect } = props;

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
