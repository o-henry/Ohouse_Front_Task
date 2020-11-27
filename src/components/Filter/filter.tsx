import React from 'react';
import cn from 'classnames';

import { Button } from 'components';

interface Props {
  style?: string;
}

function Filter({ style }: Props): React.ReactElement {
  return (
    <div className={cn('Filter', style)}>
      <Button>스크랩한 것만 보기</Button>
    </div>
  );
}

export default Filter;
