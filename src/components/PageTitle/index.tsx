import React, { FC } from 'react'

interface Props {
    title: string;
    subtitle?: string;
}

const PageTitle:FC<Props> = ({title, subtitle}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#252423]">
        <h1 className='text-[80px] font-[700] text-white'>{title}</h1>
        <hr className="my-4 w-full border-solid border-gray-400" />
        <p>{subtitle}</p>
    </div>
  )
}

export default PageTitle
