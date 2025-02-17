export const ObviousChoice = () => {
  return (
    <div className="w-full bg-white py-12 sm:mx-8 md:mx-[80px] md:py-20">
      <div className="mb-12 flex max-w-7xl flex-col items-center text-center sm:items-start sm:text-left lg:justify-between lg:text-left">
        <h2 className="font-brand-title mb-6 text-3xl font-bold text-[#1C1C1C] sm:mb-8 sm:text-4xl lg:mb-0 lg:text-5xl">
          Premium Offerings for Security & Compliance
        </h2>
        <p className="text-brand-gray font-brand text-[16px] font-[400] sm:text-[18px]">
          If you need services that go above and beyond the standard service
          call, we also offer:
        </p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:justify-between">
        <div className="w-full space-y-4 md:w-1/2">
          {[
            'Real-Time Asset Management',
            'Enhanced Cybersecurity for Cloud Applications',
            'Continuous Vulnerability Management (CVM)',
          ].map((item, index) => (
            <div key={index} className="border-l border-[#252423] pl-4 sm:pl-6">
              <p className="text-brand-black font-brand text-xl font-[600] sm:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full space-y-4 md:w-1/2">
          {[
            'Extended Detection & Response (EDR/XDR)',
            'Secure Password Manager',
            'High-Availability Backup Solutions',
          ].map((item, index) => (
            <div key={index} className="border-l border-[#252423] pl-4 sm:pl-6">
              <p className="text-brand-black font-brand text-xl leading-relaxed font-semibold sm:text-2xl">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
