import { Window } from '../../../page-components/Window';

export const Info = () => {
  return (
    <Window className="font-brand font-brand-weight mt-[70px] w-full bg-[#191919] p-2.5 text-center text-[16px] text-white md:px-[100px] md:py-[70px] md:text-[24px]">
      <div>
        <p className="mb-1">
          Our monthly maintenance contracts include a base bundle of remote
          and/or on-site support services at a discounted rate. Once the bundled
          threshold has been reached, additional time & parts used are billed as
          separate line items on one convenient monthly statement.
        </p>
        <p>
          With offices in Charlottesville, Richmond, and Washington DC, we are
          able to respond to our clients’ needs quickly & reliably—all with a
          friendly emanation of professionalism that is second to none in this
          industry.
        </p>
      </div>
    </Window>
  );
};
