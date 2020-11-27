import React from 'react';
import cn from 'classnames';

type ButtonTypes = undefined | 'button' | 'submit' | 'reset';

interface Props {
  /* className에 따른 style */
  style?: string;
  /* event handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined;
  /* 버튼 이름 or 내용 */
  children: any;
  /* handle btn type (submit, etc..) */
  type?: ButtonTypes;
  /* id */
  id?: any;
}

function Button({ style, ...props }: Props): React.ReactElement {
  const { children, id } = props;

  return (
    <button id={id} className={cn('Button', style)} {...props}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  style: '',
  type: 'button',
  onClick: undefined,
};

export default Button;
