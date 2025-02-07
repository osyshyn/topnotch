import { Button } from '../../../page-components/Button';
import { ObviousChoice } from '../ObviousChoice';
import ArrowUp from '../../../assets/icon/carbon_arrow-up-right.svg';
import { ButtonVariants } from '../../../@types/button';
import PersonImg from '../../../assets/img/person.png';
import { Window } from '../../../page-components/Window';

export const Body = () => {
  return (
    <>
      <ObviousChoice />
      <div>
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <h2 className="font-brand-title text text-brand-black text-[48px] font-[700]">
              Interested in a premium,comprehensive IT experience?
            </h2>
            <p className="text-brand-gray font-brand text-[18px] font-[400]">
              Click the button below once you’re ready to have a conversation.
            </p>
          </div>
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
      <div className="mt-[70px] flex justify-between gap-20 px-20">
        <div>
          <img src={PersonImg} alt="PersonImg" />
        </div>
        <Window className="border-brand-gray max-w-[735px] border bg-white">
          <div>
            <h2 className="font-brand text-[24px] font-[700]">
              Why Top Notch for Network Support?
            </h2>
            <div className="font-brand text-brand-gray mt-6 flex flex-col gap-1 text-[18px] font-[400]">
              <p>
                Top Notch boasts a managed client retention rate of 97%, almost
                unheard of in the industry. This is because our clients rarely
                get infected, lose data, or have their overall abilities to
                conduct business disrupted. But when life doesn’t go as planned,
                our same-day service is always available to sort things out
                quickly..
              </p>
              <p>
                In addition to Ethernet & WiFi services, we can also help with
                structured cabling, outdoor wireless solutions, computer
                repairs, VoIP, and general technology consulting. It’s much more
                convenient having a “one-stop shop” competently serving your
                needs than having multiple vendors and the lack of
                accountability that comes along.
              </p>
              <p>
                Our field staff has over 150 years of combined experience in
                networking, firewalls, servers, VPN’s, and telecom. We outsource
                fewer components of our offerings than any other comparable
                firm.
              </p>
            </div>
          </div>
        </Window>
      </div>

      <div className="mt-[70px] gap-20 px-20">
        <h2 className="font-brand-title text-center text-[48px] font-[700]">
          Comprehensive Business IT Solutions
        </h2>
        <div className="mt-10">
          <div className="flex flex-col gap-10">
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Staff Augmentation for the workforce
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Management software to increase your business efficiency
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Web-Based Marketing Solutions
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              VoIP Phone Systems & Service
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Backup & Replication
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              General Technology Consulting
            </h3>
          </div>
          <div className="flex flex-col gap-10">
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Computer Equipment & Repairs
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Disaster Recovery & Emergency Solutions
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Cybersecurity & Compliance
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              VPN & Remote Access
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Email, Hosting, & DNS Management
            </h3>
            <h3 className="font-brend border-l border-[#252423] pl-6 text-[24px] font-[600] text-[#1C1C1C]">
              Cloud Computing
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
