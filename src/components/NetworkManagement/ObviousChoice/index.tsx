export const ObviousChoice = () => {
  return (
    <div className="mx-auto w-full max-w-7xl bg-white px-4 py-20 lg:px-20">
      <div className="mb-16 flex flex-col flex-wrap items-start justify-between gap-4 lg:flex-row">
        <h2 className="font-brand-title mb-8 text-4xl font-bold text-[#1C1C1C] lg:mb-0 lg:text-5xl">
          Top Notch - the Obvious Choice <br /> for Network Solutions & Support
        </h2>
        <p className="text-brand-gray font-brand text-[18px] font-[400]">
          Numerous circumstances call for a computer network specialist. The
          most frequent are listed below:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        {/* Here for You */}
        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">People</h3>
          <p className="leading-relaxed text-gray-600">
            Our organization places a high value on the hiring process, as well
            as continuing education. We are the most naturally diverse and
            dynamic team you will find in the industry.
          </p>
        </div>

        {/* Professionals, not Geeks */}
        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">Strategy</h3>
          <p className="leading-relaxed text-gray-600">
            Expect only the finest, most proven technologies, processes and
            tools to be employed in the commission of safeguarding your life’s
            work.
          </p>
        </div>

        {/* Dependable Service Quality */}
        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">Execution</h3>
          <p className="leading-relaxed text-gray-600">
            When we find that the best technology, process, or tool for a
            particular situation doesn’t exist, we invent it.
          </p>
        </div>

        {/* Here to Stay */}
        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">Outcomes</h3>
          <p className="leading-relaxed text-gray-600">
            Those who subscribe to{' '}
            <span className="text-[#4F78D6]">our managed plans</span> outperform
            their competition.
          </p>
        </div>
      </div>
    </div>
  );
};
