import React, { FC, ReactNode } from "react";
import cn from "classnames";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Window: FC<Props> = ({ children, className }) => (
  <div
    className={cn(
      "bg-[#4F78D6] rounded-[30px] p-8",
      className
    )}
  >
    {children}
  </div>
);
