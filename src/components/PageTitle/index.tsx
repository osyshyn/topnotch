import React, { FC } from 'react'

interface Props {
    title: React.ReactNode;
    subtitle?: string;
}

const PageTitle:FC<Props> = ({title, subtitle}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <h1 className='font-brand-title text-[80px] font-[700] text-white text-center'>{title}</h1>
        <hr className="my-5 w-full border-solid border-gray-400" />
        <p className='mt-3 text-2xl text-gray-100 font-brand font-[400] text-[24px] text-center'>{subtitle}</p>
    </div>
  )
}

export default PageTitle
