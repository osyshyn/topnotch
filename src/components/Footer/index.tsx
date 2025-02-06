import Logo from "../../assets/img/TopNotch-logo-no-tagline 1.png";

export const Footer = () => {
  return (
    <footer className="bg-[#191919] w-full px-20 pt-14 pb-10 flex flex-col">
      <div className="flex flex-col gap-10">
        {/* Header Row */}
        <div className="flex flex-row justify-between pb-8 border-b border-white/30">
          <img 
            className="w-[323px] h-[68px]"
            src={Logo}
            alt="TopNotch Logo" 
          />
          <div className="flex flex-row items-center gap-6">
            <img src="/path-to-square.svg" alt="Square" />
            <p className="text-white/60 font-['Source_Sans_Pro'] text-lg font-normal leading-[1.6] max-w-[372px]">
              Providing premier computer and network support to businesses and
              home users in Virginia.
            </p>
          </div>
        </div>

        {/* Sales & Support Section */}
        <div className="flex flex-row gap-12">
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Sales & Service inquiries
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              info@topnotchcomputers.com
            </p>
          </div>
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Support Requests
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              support@topnotchcomputers.com
            </p>
          </div>
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Call toll-free
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              800-307-1249
            </p>
          </div>
        </div>

        {/* Address Section */}
        <div className="flex flex-row gap-12">
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Richmond
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              8401 Mayland Dr, Suite. #G<br />
              Richmond, VA 23294
            </p>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              804-404-7200
            </p>
          </div>
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Washington D.C.
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              7389 Lee Hwy, Ste. #310<br />
              Falls Church, VA 22042
            </p>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              703-459-9990
            </p>
          </div>
          <div className="flex-[0.2] flex flex-col gap-5">
            <h4 className="text-white font-['Source_Sans_Pro'] text-base font-bold leading-5">
              Charlottesville
            </h4>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              300 Preston Ave, Ste. #304<br />
              Charlottesville, VA 22902
            </p>
            <p className="text-white font-['Source_Sans_Pro'] text-sm font-normal leading-[1.25]">
              434-220-9308
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex justify-between mt-8">
        <p className="text-white font-['Source_Sans_Pro'] text-sm">
          © Copyright Top Notch 2024. All rights reserved.
        </p>
        <div className="space-x-4">
          <a href="#" className="text-white font-['Source_Sans_Pro'] text-sm hover:opacity-80">
            Privacy Policy
          </a>
          <a href="#" className="text-white font-['Source_Sans_Pro'] text-sm hover:opacity-80">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
