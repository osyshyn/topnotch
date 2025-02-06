import { FC, memo, MouseEventHandler, ReactNode } from 'react';
import cn from 'classnames';
import { BUTTON_STYLE_VARIANTS } from './constants';
import { ButtonVariants } from '../../@types/button';

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  variant?: ButtonVariants;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  form?: string;
}

export const Button: FC<Props> = memo(
  ({
    children,
    className,
    isLoading,
    variant,
    type,
    isDisabled,
    onClick,
    form,
  }) => {
    const combinedClassNames = cn(
      'flex justify-center items-center outline-0 transition ease-in-out duration-200 active:translate-y-0.5 active:duration-150 active:brightness-95 disabled:opacity-50 disabled:active:translate-y-0 disabled:brightness-100',
      variant ? BUTTON_STYLE_VARIANTS[variant] : '',
      className
    );

    return (
      <button
        className={combinedClassNames}
        type={type}
        onClick={onClick}
        disabled={isDisabled}
        form={form}
      >
        {isLoading ? <p>loading...</p> : children}
      </button>
    );
  }
);
