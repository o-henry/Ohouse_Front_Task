import React from 'react';
import cn from 'classnames';

import { Button } from 'components';
import { check_btn, unchecked_btn } from 'assets';

interface Props {
  style?: string;

  setFilterClick: any;

  filterClick: any;
}

function Filter({
  style,
  setFilterClick,
  filterClick,
}: Props): React.ReactElement {
  return (
    <div className={cn('Filter', style)}>
      <Button onClick={() => setFilterClick(!filterClick)}>
        <img
          src={filterClick ? check_btn : unchecked_btn}
          alt="check_btn"
          className="image check"
        />
      </Button>
      스크랩한 것만 보기
    </div>
  );
}

export default React.memo(Filter);
