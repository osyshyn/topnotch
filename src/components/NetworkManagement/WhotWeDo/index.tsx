import { Window } from '../../../page-components/Window';

export const WhotWeDo = () => {
  return (
    <div className="mt-[70px] flex w-full flex-col items-center justify-center">
      <div className="flex flex-wrap gap-4">
        <h1 className="font-brand-title text-[48px] font-[700] text-white">
          Our Network Support Specialists - What We Do
        </h1>
        <p className="text-brand-gray font-brand text-[18px] font-[400]">
          Numerous circumstances call for a computer network specialist. The
          most frequent are listed below:
        </p>
      </div>
      <div className="mt-10 flex w-full justify-between gap-10">
        <Window className="bg-brand-dark flex-1">
          <div className="flex flex-col justify-center gap-6 text-white">
            <h1 className="font-brand text-[20px] font-[600]">
              Our Specialists will Connect & Protect You.
              <br /> While Enjoying Every Moment.
            </h1>
            <p className="font-brand text-[18px] font-[400]">
              The first step in the process will be to contact an IT support
              provider to evaluate your organization and create a customized
              plan for your networks, cloud environments, and information
              security. Following estimate approval, our A-Team will pay you a
              friendly visit to roll things out.
            </p>
          </div>
        </Window>
        <Window className="bg-brand-orange flex-1">
          <div className="flex flex-col justify-center gap-6 text-white">
            <h1 className="font-brand text-[20px] font-[600]">
              Ongoing Maintenance & Engagement to Support
              <br /> Your Company’s Growth
            </h1>
            <p className="font-brand text-[18px] font-[400]">
              Routine maintenance of your network, backups, and cybersecurity is
              a necessity in today’s climate. We’ll work together and frequently
              stay in touch to keep you focused on the big picture.
            </p>
          </div>
        </Window>
      </div>
    </div>
  );
};
