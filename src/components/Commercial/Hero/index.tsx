import PageTitle from '../../PageTitle';
import { CoreServices } from '../CoreServices';
import { VideoComent } from '../VideoComent';

export const Hero = () => {
  return (
    <div className="bg-brand-black">
      <div className="ml-20">
        <div className="mx-[80px] flex flex-col items-center justify-center py-20">
          <PageTitle
            title={<>Commercial</>}
            subtitle="Full-service IT solutions & support services"
          />
        </div>
        <VideoComent />
        <CoreServices />
      </div>
    </div>
  );
};
