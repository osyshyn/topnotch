import { Window } from '../../../page-components/Window';

export const Paln = () => {
  return (
    <div className="mx-[80px] mt-[70px] flex flex-col items-start justify-center">
      <div className="flex flex-wrap gap-4">
        <h1 className="font-brand-title text-brand-black text-[48px] font-[700]">
          When is a Managed IT <br /> Plan the Right Move?
        </h1>
      </div>
      <div className="mt-10 flex w-full justify-between gap-10">
        <Window className="border-brand-gray flex-1 border">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-brand text-brand-black text-[20px] font-[600]">
              Supersizing or Downsizing?
            </h1>
            <p className="font-brand text-brand-gray text-[18px] font-[400]">
              Today, companies hire a managed IT service provider, maintain
              their own internal IT department, or more than likely, employ some
              combination of both. So how do you pick the approach that works
              best for you?
            </p>
            <p className="font-brand text-brand-gray text-[18px] font-[400]">
              Depending on the size of your company,{' '}
              <span className="text-brand-blue underline">
                managed IT support services will cost less
              </span>{' '}
              and lend an outsider’s informed perspective on the big picture.
              Since we have over 5,000 clients, we skip the formalities and
              bureaucracy, and dive right into treating your company as if it
              were our own.
            </p>
          </div>
        </Window>
        <Window className="bg-brand-blue flex-1">
          <div className="flex flex-col justify-center gap-6 text-white">
            <h1 className="font-brand text-[20px] font-[600]">
              Overwhelmed with Compliance?
            </h1>
            <p className="font-brand text-[18px] font-[400]">
              Top Notch Computers leverages the best technology toolset and the
              most knowledgeable professionals in the field. We can augment, or
              replace any function of your your internal IT department. The more
              companies utilize our managed IT services, the better they
              perform.
            </p>
            <p className="font-brand text-[18px] font-[400]">
              Outsourcing information technology needs has become commonplace in
              today’s world-from helpdesk, routine maintenance, to networking,
              cybersecurity, backups, and cloud management, we’re the sensible
              option.
            </p>
          </div>
        </Window>
      </div>
    </div>
  );
};
