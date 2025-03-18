import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import { Window } from '../../../page-components/Window';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import ArrowUpBlue from '../../../assets/icon/carbon_arrow-up-right-blue.svg';

import apostrophe from '../../../assets/img/“-blue.png';

export const Body = () => {
  return (
    <div className="pt-10">
      <div className="mx-20">
        <div className="mt-10 flex items-stretch justify-between gap-10">
          <Window className="border-brand-gray flex-1 border">
            <div>
              <p className="font-brand-black text-[24px] font-[500]">
                Diagnostic Fee
              </p>
              <p className="text-brand-blue font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$155</span> for
                Drop-Offs
              </p>
              <p className="text-brand-blue font-brand text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$205</span> for Service
                Calls
              </p>
              <p className="text-brand-gray font-brand mt-6 mb-4 text-[18px] font-[400]">
                Covers estimate & first hour of labor on all services!
              </p>
            </div>
          </Window>
          <Window className="bg-brand-blue flex-1">
            <div className="text-white">
              <p className="font-brand text-[24px] font-[500]">
                General Labor Rate
              </p>
              <p className="font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$155</span> / hour
                Bench Fee (computer Repairs)
              </p>
              <p className="font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$175</span>/ hour for
                Helpdesk
              </p>
              <p className="font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]"> $205</span> / hour for
                Service Calls
              </p>
            </div>
          </Window>
        </div>
        <p className="text-brand font-brand mt-6 mb-4 text-[18px] font-[400]">
          * For service calls and on-site consultations, travel time from our
          offices will be billed at our general labor rate of $205/hour.
        </p>
      </div>

      <div className="mx-20">
        <div className="mt-10 flex items-stretch justify-between gap-10">
          <Window className="border-brand-gray flex-1 border">
            <div>
              <p className="font-brand-black text-[24px] font-[500]">
                Emergency Rate
              </p>
              <p className="text-brand-blue font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$450</span> hour
              </p>
              <p className="text-brand-gray font-brand mt-6 mb-4 text-[18px] font-[400]">
                Unplanned service outside of business hours, incidents where we
                must alter the schedule for a non-managed customer.
              </p>
              <p className="text-brand-gray font-brand mt-6 mb-4 text-[18px] font-[400]">
                Planned scheduled projects on nights and weekends will not be
                billed at the emergency rate. Managed clients will not be
                charged this rate.
              </p>
            </div>
          </Window>
          <Window className="border-brand-gray flex-1 border">
            <div>
              <p className="font-brand-black text-[24px] font-[500]">
                Contractor Rate
              </p>
              <p className="text-brand-blue font-brand mt-6 mb-4 text-[24px] font-[400]">
                <span className="text-[32px] font-[700]">$350</span> hour
              </p>
              <p className="text-brand-gray font-brand mt-6 mb-4 text-[18px] font-[400]">
                When we work on another’s behalf.
              </p>
            </div>
          </Window>
        </div>
      </div>

      <div className="mx-[80px] my-[150px]">
        <div>
          <h2 className="text-brand-black font-brand-title text-left text-5xl font-[700]">
            We’re Different
          </h2>
        </div>

        <p className="font-brand mt-5 text-[18px]">
          Upon discovery of a nasty virus, many repair techs or corporate IT
          staff immediately resort to reformatting your hard drive. We fix the
          problem so you can keep all your data. When the other guys see a
          laptop fail to turn on, they are often quick to blame the motherboard
          (or on Macs, logic board), which is usually the most expensive
          component in a system. We diagnose the problem and fix it. The other
          guys charge flat fees for repairs and ding you with hidden charges
          later when other problems pop up. We charge a low, hourly rate for all
          services with no hidden fees.
        </p>

        <div className="mt-[150px] mb-[150px] flex flex-col items-center justify-center gap-4">
          <div>
            <img src={apostrophe} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <p className="text-brand-black font-brand px-[100px] text-[18px] font-[400]">
              Top Notch has Supra-fast service and the best prices anywhere.
              Knowledgeable, <br />
              friendly, and always reliable. I endorse this business wherever I
              travel. Thanks again.
            </p>
            <p className="font-brand text-brand-black text-center text-2xl font-[600]">
              J. Pernell
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-brand-black font-brand-title text-left text-5xl font-[700]">
            Billing Policy
          </h2>
          <Button
            className="!max-w-[270px] rounded-full whitespace-nowrap"
            variant={ButtonVariants.SECONDARY}
          >
            Why Choose Top Notch?
            <img
              src={ArrowUp}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </div>
        <p className="font-brand mt-5 text-[18px]">
          We appreciate your business! Cash, checks, and all major credit cards
          are accepted. Payment is due upon completion of a service.
        </p>
        <p className="font-brand mt-5 text-[18px]">
          Clients on managed contracts are billed monthly per their agreement,
          which will vary by size and industry vertical. Some other clients may
          need to be billed for a service (or have a third party billed) instead
          of paying immediately upon completion. This requires a valid backup
          credit card under all circumstances, which may be authorized up to the
          transaction balance until payment by cash or check is received. Once
          30 days passes from date of the invoice with no other payment, the
          credit card is charged.
        </p>
        <p className="font-brand mt-5 text-[18px]">
          For more information, please see our{' '}
          <span className="text-brand-blue cursor-pointer text-[18px] font-[700] underline decoration-solid decoration-auto underline-offset-auto">
            Terms & Conditions.
          </span>
        </p>
      </div>
    </div>
  );
};
