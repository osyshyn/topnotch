import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';

export const Located = () => {
  return (
    <div className="md:mx-[80px]">
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h2 className="font-brand-title text-brand-black text-center text-[48px] font-[700]">
            We’re your local computer <br /> repair shop, wherever you’re
            located.
          </h2>
          <p className="text-brand-gray font-brand px-[30px] text-[18px] font-[400] md:px-[100px]">
            For your decentralized company in the post-COVID era, we offer a
            nationwide mail-in computer repair service for PCs and Macs
            (desktops, laptops, or tablets). In addition to assisting your
            work-from-home staff with helpdesk issues and repairs, we can keep
            stock of all your technology in circulation.
          </p>
        </div>
        <Button
          className="!max-w-[260px] rounded-full"
          variant={ButtonVariants.SECONDARY}
        >
          Visit MailYourPC.com
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
