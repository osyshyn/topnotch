import PageTitle from '../../PageTitle';
import apostrophe from '../../../assets/img/“-blue.png';
import daimond from '../../../assets/icon/daimond.svg';

export const Hero = () => {
  return (
    <div className="bg-brand-black">
      <div className="relative mx-auto">
        <div className="flex flex-col items-center justify-center py-20">
          <PageTitle
            title={<>Residential</>}
            subtitle="We make your computer troubles disappear. Guaranteed."
          />
        </div>

        {/* Note */}
        <div className="mx-[80px] my-[150px]">
          <div className="flex flex-col items-center justify-center gap-4">
            <div>
              <img src={apostrophe} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-10 text-center text-white">
              <p className="font-brand px-[100px] text-[18px] font-[400]">
                I wish I had known about Top Notch years ago. <br /> I have
                probably spent over $1,000 that didn’t need to be spent and
                junked 2-3 computers that didn’t need to be junked.
              </p>
              <p className="font-brand text-center text-2xl font-[600]">
                Tammy Baines
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mx-auto w-full max-w-7xl px-4 pb-20 lg:px-20">
          <div className="mb-16 flex flex-col flex-wrap items-start justify-between gap-4 lg:flex-row">
            <h2 className="font-brand-title mb-8 text-4xl font-bold text-white lg:mb-0 lg:text-5xl">
              Our service area covers two thirds of all Virginians and
              Marylanders.
            </h2>
            <p className="text-brand-gray font-brand text-[18px] font-[400]">
              Expect professional, personalized service from our computer repair
              company that the big guys just can’t match. On-site services and
              house calls available.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="border-brand-gray space-y-4 border-l pl-6">
              <h3 className="text-xl font-semibold text-white">
                Computer Diagnostics & Repairs
              </h3>
              <p className="text-brand-gray leading-relaxed">
                If your home computer has problems and is 8 years old or less,
                don’t throw it away until we’ve taken a look. We can probably
                fix it for far less than the cost of replacement.
              </p>
            </div>

            <div className="border-brand-gray space-y-4 border-l pl-6">
              <h3 className="text-xl font-semibold text-white">
                New, Used, Refurbished, & Custom PCs
              </h3>
              <p className="text-brand-gray leading-relaxed">
                From hand-built workstations and servers to professional-grade
                notebooks, to affordable office machines, we’ve got you covered.
              </p>
            </div>

            <div className="border-brand-gray space-y-4 border-l pl-6">
              <h3 className="text-xl font-semibold text-white">
                Networking & Printing Solutions
              </h3>
              <p className="text-brand-gray leading-relaxed">
                We’ll make sure you stay connected with Internet access, strong
                WiFi, printing, smartphone/mobile device integrations, and more.
              </p>
            </div>

            <div className="border-brand-gray space-y-4 border-l pl-6">
              <h3 className="text-xl font-semibold text-white">
                Virus & Spyware Removal
              </h3>
              <p className="text-brand-gray leading-relaxed">
                Unlike many retail stores and computer shops, we are almost
                always able to eradicate difficult malware infections.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[40%] hidden lg:block">
        <img src={daimond} alt="" />
      </div>
    </div>
  );
};
