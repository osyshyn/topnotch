import PageTitle from '../../PageTitle';
import { Benefits } from '../Benefits';
import { WhotWeDo } from '../WhotWeDo';

export const Hero = () => {
  return (
    <div className="bg-brand-black">
      <div className="mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <PageTitle
            title={
              <>
                Network Design, <br />
                Diagnostics, & Support
              </>
            }
            subtitle="Our network services will connect you and your staff to each other, the Internet, and all of your productivity mechanisms. Local and cloud information systems, developed and maintained by Top Notch, will assist you in developing a vision for your company’s future to be used as a blueprint for success."
          />
        </div>
        <WhotWeDo />
        <Benefits />
      </div>
    </div>
  );
};
