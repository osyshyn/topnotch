import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';

export const SuccessStory = () => {
  return (
    <div className="w-full bg-white px-4 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between lg:flex-row">
          <h2 className="font-brand-title mb-8 max-w-xl text-4xl font-bold text-[#1C1C1C] lg:mb-0 lg:text-5xl">
            Achieve The Right
            <br />
            Success With Top Notch
          </h2>
          <div className="flex gap-4">
            <Button
              className="rounded-full"
              variant={ButtonVariants.SECONDARY_SQUARE}
            >
              Read More
            </Button>
            <Button className="rounded-full" variant={ButtonVariants.SECONDARY}>
              Contact Us
              <img
                src={ArrowUp}
                className="ml-2 h-4 w-4"
                alt=""
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {/* Here for You */}
          <div className="space-y-4 border-l border-[#252423] pl-6">
            <h3 className="text-xl font-semibold text-[#1C1C1C]">
              Here for You
            </h3>
            <p className="leading-relaxed text-gray-600">
              Founded in 1999, we are, and will always be privately held and
              family-owned. Completely free from venture capital, private equity
              and outside interests, what’s best for our customers can truly be
              our first priority.
            </p>
          </div>

          {/* Professionals, not Geeks */}
          <div className="space-y-4 border-l border-[#252423] pl-6">
            <h3 className="text-xl font-semibold text-[#1C1C1C]">
              Professionals, not Geeks
            </h3>
            <p className="leading-relaxed text-gray-600">
              Our in-house team of experienced and personable field engineers,
              consultants, office staff, and computer repair techs are qualified
              experts with the most up-to-date training available. We are always
              ready to assist, with a genuine passion for what we do.
            </p>
          </div>

          {/* Dependable Service Quality */}
          <div className="space-y-4 border-l border-[#252423] pl-6">
            <h3 className="text-xl font-semibold text-[#1C1C1C]">
              Dependable Service Quality
            </h3>
            <p className="leading-relaxed text-gray-600">
              Ask around. We do a good job. Your satisfaction, return business,
              and referrals are priceless to us. We treat you how we would like
              to be treated and offer warranties on all of our work.
            </p>
          </div>

          {/* Here to Stay */}
          <div className="space-y-4 border-l border-[#252423] pl-6">
            <h3 className="text-xl font-semibold text-[#1C1C1C]">
              Here to Stay
            </h3>
            <p className="leading-relaxed text-gray-600">
              Top Notch has weathered recessions, corporate smear campaigns,
              disease pandemics, and civil unrest standing tall. Partner with
              us, and rest assured we’ll be around to support your technology
              and stand behind our products for as long as you need us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
