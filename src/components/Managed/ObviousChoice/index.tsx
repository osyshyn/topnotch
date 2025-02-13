export const ObviousChoice = () => {
  return (
    <div className="mx-[80px] w-full bg-white py-20">
      <div className="mb-16 flex max-w-7xl flex-col flex-wrap items-start justify-between gap-4 lg:flex-row">
        <h2 className="font-brand-title mb-8 text-4xl font-bold text-[#1C1C1C] lg:mb-0 lg:text-5xl">
          Premium Offerings for Security & Compliance
        </h2>
        <p className="text-brand-gray font-brand text-[18px] font-[400]">
          If you need services that go above and beyond the standard service
          call, we also offer:
        </p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <div className="w-full space-y-4 md:w-1/2">
          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              Real-Time Asset Management
            </p>
          </div>

          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              Enhanced Cybersecurity for Cloud Applications
            </p>
          </div>

          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              Continuous Vulnerability Management (CVM)
            </p>
          </div>
        </div>

        <div className="w-full space-y-4 md:w-1/2">
          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              Extended Detection & Response (EDR/XDR)
            </p>
          </div>

          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              Secure Password Manager
            </p>
          </div>

          <div className="border-l border-[#252423] pl-6">
            <p className="text-brand-black font-brand text-2xl leading-relaxed font-semibold">
              High-Availability Backup Solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
