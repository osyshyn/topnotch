import PageTitle from '../../PageTitle';
import { Info } from '../Info';
import { WhotWeDo } from '../WhotWeDo';
import daimond from '../../../assets/icon/daimond.svg';

export const Hero = () => {
  return (
    <div className="bg-brand-black flex w-full flex-wrap items-center justify-center px-5 pt-[100px] md:px-10 xl:px-20">
      <div className="relative max-w-2xl lg:max-w-full">
        <div className="flex flex-col items-center justify-center xl:py-20">
          <PageTitle
            title={<>Managed IT Services</>}
            subtitle="Equipment outages, data loss/compromise, or even loss of connectivity can be devastating to businesses, and it is our duty to safeguard our clients from these circumstances through our managed IT services."
          />
        </div>
        <WhotWeDo />
        <Info />
        <div className="absolute right-[25%] bottom-[-10%] hidden lg:block">
          <img src={daimond} alt="" />
        </div>
      </div>
    </div>
  );
};
