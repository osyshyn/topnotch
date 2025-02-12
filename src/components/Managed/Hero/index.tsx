import PageTitle from '../../PageTitle';
import { Info } from '../Info';
import { WhotWeDo } from '../WhotWeDo';

export const Hero = () => {
  return (
    <div className="bg-brand-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <PageTitle
            title={<>Managed IT Services</>}
            subtitle="Equipment outages, data loss/compromise, or even loss of connectivity can be devastating to businesses, and it is our duty to safeguard our clients from these circumstances through our managed IT services."
          />
        </div>
        <WhotWeDo />
        <Info />
      </div>
    </div>
  );
};
