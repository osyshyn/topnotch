import Logo from '../../assets/img/TopNotch-logo-no-tagline 1.png';
import Square from '../../assets/icon/sqaure.svg';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-[#191919] px-5 pt-14 pb-10 md:px-10 xl:px-20">
      <div className="flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-col items-center border-b border-white/30 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <img
            className="w-[228px] lg:h-[68px] lg:w-[323px]"
            src={Logo}
            alt="TopNotch Logo"
          />
          <div className="flex flex-row items-center gap-6">
            <img
              className="hidden w-[72px] lg:block"
              src={Square}
              alt="Square"
            />
            <p className="max-w-[372px] text-center font-['Source_Sans_Pro'] text-lg leading-[1.6] font-normal text-white/60 lg:text-start">
              Providing premier computer and network support to businesses and
              home users in Virginia.
            </p>
          </div>
        </div>

        {/* Sales & Support Section */}
        <div className="hidden flex-row gap-12 md:flex">
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Sales & Service inquiries
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              info@topnotchcomputers.com
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Support Requests
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              support@topnotchcomputers.com
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Call toll-free
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              800-307-1249
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="hidden flex-row gap-12 md:flex">
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Richmond
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              8401 Mayland Dr, Suite. #G
              <br />
              Richmond, VA 23294
            </p>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              804-404-7200
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Washington D.C.
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              7389 Lee Hwy, Ste. #310
              <br />
              Falls Church, VA 22042
            </p>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              703-459-9990
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 lg:flex-[0.2]">
            <h4 className="font-['Source_Sans_Pro'] text-base leading-5 font-bold text-white">
              Charlottesville
            </h4>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              300 Preston Ave, Ste. #304
              <br />
              Charlottesville, VA 22902
            </p>
            <p className="font-['Source_Sans_Pro'] text-sm leading-[1.25] font-normal text-white">
              434-220-9308
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 flex justify-between">
        <p className="font-['Source_Sans_Pro'] text-sm text-white">
          © Copyright Top Notch 2024. All rights reserved.
        </p>
        <div className="space-x-4">
          <a
            href="#"
            className="font-['Source_Sans_Pro'] text-sm text-white hover:opacity-80"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="font-['Source_Sans_Pro'] text-sm text-white hover:opacity-80"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
