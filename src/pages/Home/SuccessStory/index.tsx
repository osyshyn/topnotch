import { ButtonVariants } from '../../../@types/button';
import { Button } from '../../../page-components/Button';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';

export const SuccessStory = () => {
  return (
    <div className="w-full bg-white px-5 py-16 sm:py-20 lg:mt-28 lg:mb-36 lg:px-10 xl:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center lg:mb-16 lg:flex-row lg:items-start lg:text-left">
          <h2 className="font-brand-title mb-6 max-w-2xl text-3xl font-bold text-[#1C1C1C] sm:text-4xl lg:mb-0 lg:text-5xl">
            Achieve The Right
            <br className="hidden md:block" />
            Success With Top Notch
          </h2>
          <div className="mt-6 flex gap-3 sm:gap-4 lg:ml-auto">
            <Button
              className="rounded-full px-4 py-2 text-sm sm:text-base"
              variant={ButtonVariants.SECONDARY_SQUARE}
            >
              Read More
            </Button>
            <Button
              className="rounded-full px-4 py-2 text-sm sm:text-base"
              variant={ButtonVariants.SECONDARY}
            >
              Contact Us
              <img
                src={ArrowUp}
                className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                alt=""
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="space-y-4 border-l border-[#252423] pl-4 sm:pl-6"
            >
              <h3 className="text-lg font-semibold text-[#1C1C1C] sm:text-xl">
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const sections = [
  {
    title: 'Here for You',
    description:
      'Founded in 1999, we are, and will always be privately held and family-owned. Completely free from venture capital, private equity and outside interests, what’s best for our customers can truly be our first priority.',
  },
  {
    title: 'Professionals, not Geeks',
    description:
      'Our in-house team of experienced and personable field engineers, consultants, office staff, and computer repair techs are qualified experts with the most up-to-date training available. We are always ready to assist, with a genuine passion for what we do.',
  },
  {
    title: 'Dependable Service Quality',
    description:
      'Ask around. We do a good job. Your satisfaction, return business, and referrals are priceless to us. We treat you how we would like to be treated and offer warranties on all of our work.',
  },
  {
    title: 'Here to Stay',
    description:
      'Top Notch has weathered recessions, corporate smear campaigns, disease pandemics, and civil unrest standing tall. Partner with us, and rest assured we’ll be around to support your technology and stand behind our products for as long as you need us.',
  },
];

export default SuccessStory;
