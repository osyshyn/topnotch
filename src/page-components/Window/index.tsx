import { FC, ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  children: ReactNode;
  className?: string;
}

export const Window: FC<Props> = ({ children, className }) => (
  <div className={cn('rounded-[30px]  p-10', className)}>
    {children}
  </div>
);
