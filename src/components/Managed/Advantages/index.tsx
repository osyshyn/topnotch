import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import CarouselCenter from '../../../page-components/Carusel/center';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';

import guard from '../../../assets/img/group.png';
import clock from '../../../assets/img/clock.png';
import perc from '../../../assets/img/perc.png';

const cards = [
  {
    icon: clock,
    title: 'Daily Uptime, Security, Backup Checks, and Maintenance',
    description:
      'We want to do all things possible to protect our clients’ businesses. With managed services from Top Notch, backups, cybersecurity, and business continuity are monitored by real experts in addition to automation tools.',
  },
  {
    icon: guard,
    title: 'Guaranteed Same-Day Service',
    description:
      'Most of the time, we adhere to a set appointment schedule that our clients are required to follow. However, there is a special benefit for our regular customers that will guarantee you receive even our on-site services the day you need them.',
  },
  {
    icon: perc,
    title: 'Discounted Base Billing Rate',
    description:
      'All the services your company needs come at a discounted rate. Whether on a fully-managed “per seat” plan, or a co-managed “core support” plan, managed services make much more financial sense than the alternatives. .',
  },
  {
    icon: clock,
    title: 'Daily Uptime, Security, Backup Checks, and Maintenance',
    description:
      'We want to do all things possible to protect our clients’ businesses. With managed services from Top Notch, backups, cybersecurity, and business continuity are monitored by real experts in addition to automation tools.',
  },
  {
    icon: guard,
    title: 'Guaranteed Same-Day Service',
    description:
      'Most of the time, we adhere to a set appointment schedule that our clients are required to follow. However, there is a special benefit for our regular customers that will guarantee you receive even our on-site services the day you need them.',
  },
  {
    icon: perc,
    title: 'Discounted Base Billing Rate',
    description:
      'All the services your company needs come at a discounted rate. Whether on a fully-managed “per seat” plan, or a co-managed “core support” plan, managed services make much more financial sense than the alternatives. .',
  },
];

export const Advantages = () => {
  return (
    <div className="bg-brand-black">
      <div className="mb-10">
        <h2 className="font-brand-title text text-center text-[48px] font-[700] text-white">
          Advantages of
          <br /> Comprehensive Managed Plans
        </h2>
      </div>
      <div>
        <div className="w-full">
          <CarouselCenter cards={cards} />
        </div>
      </div>
      <div className="mx-[80px]">
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <h2 className="font-brand-title text-center text-[48px] font-[700] text-white">
              Interested in a premium,
              <br />
              comprehensive IT experience?
            </h2>
            <p className="font-brand px-[100px] text-[18px] font-[400] text-white">
              Contact us today for an appointment.
            </p>
          </div>
          <Button
            className="!max-w-[260px] rounded-full"
            variant={ButtonVariants.PRIMARY}
          >
            Let's Start Now
            <img
              src={ArrowUp}
              className="ml-2 h-4 w-4"
              alt=""
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
