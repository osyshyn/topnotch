import { Button } from '../../../page-components/Button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import { ButtonVariants } from '../../../@types/button';

export const Body = () => {
  return (
    <div className="">
      {/* first */}
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h2 className="font-brand-title text text-brand-black text-[48px] font-[700]">
            We’re your local computer repair shop, wherever you’re located.
          </h2>
          <p className="text-brand-gray font-brand text-[18px] font-[400]">
            Good tech help is hard to find, which is why we also offer a
            nationwide mail-in computerrepair service for PCs and Macs
            (desktops, laptops, or tablets)!
          </p>
        </div>
        <Button className="rounded-full" variant={ButtonVariants.SECONDARY}>
          Visit Now
          <img
            src={ArrowUp}
            className="ml-2 h-4 w-4"
            alt=""
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
};
