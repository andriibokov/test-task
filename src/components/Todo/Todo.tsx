import { memo } from 'react';
import clsx from 'clsx';
import css from './todo.module.scss';
import Button, { ButtonProps } from '../UI/Button/Button';

const Todo = memo(({ value, flag, onClick }: ButtonProps) => {
  return (
    <li className={clsx(css.listItem,  flag? css.render: '')}>
      <Button
        className={'h-10 px-5 flex items-center justify-center rounded transition-colors'}
        onClick={onClick}
      >
        {flag ? '[x]' : '[ ]'} {value}
      </Button>
    </li>
  );
});

export default Todo;