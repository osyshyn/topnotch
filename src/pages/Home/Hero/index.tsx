import square from '../../../assets/icon/sqaure.svg';
import daimond from '../../../assets/icon/daimond.svg';

export const Hero = () => {
  return (
    <div className="bg-brand-black flex w-full flex-wrap items-center justify-center px-5 pt-[100px] md:px-10 xl:px-6">

      <div className="max-w-2xl">
        <h1 className="font-brand-title text-center text-[56px] font-[700] text-white sm:text-[80px]">
          Virginia's Choice For{' '}
          <span className="text-orange-500">IT Support</span>
        </h1>
        <p className="font-brand mt-3 text-center text-[16px] font-[400] text-gray-100 sm:text-[24px]">
          Providing premier computer and network support to businesses and home
          users in Virginia.
        </p>
        <div className="absolute top-[30%] right-[20%]">
          <img src={square} alt="" />
        </div>
        <div className="absolute top-[50%] left-[20%]">
          <img src={daimond} alt="" />
        </div>
      </div>
      <hr className="my-[60px] w-full border-solid border-gray-400 md:my-28" />
    </div>
  );
};
