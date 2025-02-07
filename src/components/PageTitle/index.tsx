import React, { FC } from 'react';

interface Props {
  title: React.ReactNode;
  subtitle?: string;
}

const PageTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#252423]">
      <h1 className="text-[80px] font-[700] text-white">{title}</h1>
      <hr className="my-4 w-full border-solid border-gray-400" />
      <p>{subtitle}</p>
    </div>
  );
};

export default PageTitle;
