import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { check_btn } from 'assets';

interface Props {
  style?: string;
}

function Filter({ style }: Props): React.ReactElement {
  return (
    <div className={cn('Filter', style)}>
      <Button>
        <img src={check_btn} alt="check_btn" className="image check" />
      </Button>
      스크랩한 것만 보기
    </div>
  );
}

export default Filter;
