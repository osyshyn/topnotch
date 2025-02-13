import { Company } from './Company';
import { Residential } from './Residential';

export const Services = () => {
  return (
    <>
      {' '}
      <div className="bg-brand-black flex w-full flex-col gap-15 px-5 lg:px-10 xl:px-[80px]">
        {/* Commercial Services */}
        <Company />
        {/* Residential Services */}
        <Residential />
      </div>
    </>
  );
};
