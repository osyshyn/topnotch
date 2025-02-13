import PageTitle from '../../PageTitle';
import { Specialize } from '../Specialize';

export const Hero = () => {
  return (
    <div className="bg-brand-black">
      <div className="ml-20">
        <div className="mx-[80px] flex flex-col items-center justify-center py-20">
          <PageTitle
            title={<>Custom Computers</>}
            subtitle="We are proud to offer our own line of hand-built and custom-configured systems. Our computers are superior when it comes to performance, reliability, upgradeability, and overall value. Every system is designed and assembled to your specifications."
          />
        </div>
        <Specialize />
      </div>
    </div>
  );
};
