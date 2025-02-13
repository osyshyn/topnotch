import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import { Window } from '../../../page-components/Window';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import ArrowUpBlue from '../../../assets/icon/carbon_arrow-up-right-blue.svg';

export const QualifiedProvider = () => {
  return (
    <div className="mx-20">
      <div>
        <h2 className="text-brand-black font-brand-title text-5xl font-[700]">
          Design, development, implementation, and technical support—all from
          one qualified provider.
        </h2>
      </div>
      <div className="mt-10 flex items-stretch justify-between gap-10">
        <Window className="border-brand-gray flex-1 border">
          <div>
            <p className="font-brand text-[20px] font-semibold">
              Managed IT Services
            </p>
            <p className="text-brand-gray font-brand mt-6 mb-4 text-[18px] font-[400]">
              If fully-functional technology is important to you, it is
              imperative to have a personal relationship with a professional IT
              provider. Most businesses prefer the security and advantages of
              comprehensive care over à la carte break/fix services.
            </p>
            <p className="text-brand-gray font-brand text-[18px] font-[400]">
              Service area: Managed services available to businesses in southern
              Maryland and northern and central Virginia, including
              Charlottesville, Richmond, D.C., Lynchburg, Fredericksburg,
              Culpeper.
            </p>
          </div>
          <Button
            className="mt-6 rounded-full"
            variant={ButtonVariants.SECONDARY}
          >
            Set up an appointment
            <img
              src={ArrowUp}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </Window>
        <Window className="bg-brand-blue flex-1">
          <div className="text-white">
            <p className="font-brand text-[20px] font-semibold">
              À La Carte Services
            </p>
            <p className="font-brand mt-6 mb-4 text-[18px] font-[400]">
              We understand that some smaller organizations may not have a need
              for the full monitoring and guaranteed same-day support of an
              ongoing maintenance package. So, to ensure that any size business
              can leverage our expertise, we provide as-needed support direct to
              businesses at an affordable hourly rate.
            </p>
            <p className="font-brand text-[18px] font-[400]">
              Service area: À la carte support is currently available to the
              Charlottesville, Richmond, Shenandoah Valley, and DC Metro areas.
            </p>
          </div>
          <Button
            className="mt-6 rounded-full"
            variant={ButtonVariants.SECONDARY_SQUARE}
          >
            Set up an appointment
            <img
              src={ArrowUpBlue}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </Window>
      </div>
    </div>
  );
};
