import square from '../../../assets/icon/sqaure.svg';
import daimond from '../../../assets/icon/daimond.svg';

export const Hero = () => {
  return (
    <div className="bg-brand-black relative flex w-full flex-wrap items-center justify-center px-6 pt-[100px]">
      <div className="max-w-2xl">
        <h1 className="font-brand-title text-center text-[80px] font-[700] text-white">
          Virginia's Choice For{' '}
          <span className="text-orange-500">IT Support</span>
        </h1>
        <p className="font-brand mt-3 text-center text-2xl text-[24px] font-[400] text-gray-100">
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
      <hr className="my-28 w-full border-solid border-gray-400" />
    </div>
  );
};
