import { Company } from './Company';
import { Residential } from './Residential';
import square from '../../../assets/icon/sqaure.svg';
import daimond from '../../../assets/icon/daimond.svg';

export const Services = () => {
  return (
    <>
      {' '}
      <div className="bg-brand-black flex w-full flex-col gap-15 px-5 md:px-10 xl:px-[80px]">
        {/* Commercial Services */}

        <Company />
        <Residential />
        <div className="absolute top-[44%] left-[44%]">
          <img src={square} alt="" />
        </div>
        <div className="absolute top-[90%] right-[20%]">
          <img src={daimond} alt="" />
        </div>
      </div>
    </>
  );
};
